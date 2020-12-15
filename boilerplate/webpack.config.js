const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const {createProxyMiddleware} = require("http-proxy-middleware");

const javascriptRule = (sourceMaps) => ({
  test: /\.jsx?$/,
  exclude: process.env.WEBPACK_DEV_SERVER
    ? /node_modules/
    : /node_modules(?!([/\\])(ansi|chalk|strip-ansi|react-dev-utils|unicode-match-property-value-ecmascript|unicode-match-property-ecmascript|acorn|query-string|hamburger-react))/,
  use: [
    {
      loader: "babel-loader",
      options: {
        babelrc: false,
        configFile: false,
        compact: false,
        presets: [
          [
            "@babel/preset-env",
            {
              corejs: {
                version: 3
              },
              useBuiltIns: "usage"
            }
          ],
          "@babel/preset-react"
        ],
        plugins: ["@babel/plugin-proposal-class-properties"],
        cacheDirectory: true,
        cacheCompression: false,
        sourceMaps,
        inputSourceMap: sourceMaps
      }
    }
  ]
});

const urlRule = () => ({
  test: [/\.jpe?g$/, /\.png$/, /\.svg$/, /\.otf$/, /\.ttf$/],
  loader: "url-loader",
  options: {
    limit: 10000,
    name: "static/media/[name].[hash:8].[ext]"
  }
});

const cssRule = (extract, sourceMaps, modules) => ({
  test: /\.css$/,
  use: [
    extract ? MiniCssExtractPlugin.loader : "style-loader",
    {
      loader: "css-loader",
      options: {
        importLoaders: 1,
        sourceMap: sourceMaps,
        modules
      }
    }
  ]
});

const scssRule = (extract, sourceMaps, hashModuleNames) => {
  const css = cssRule(extract, sourceMaps, {
    localIdentName: !hashModuleNames ? "[path][name]__[local]" : "[hash:base64]",
    exportLocalsConvention: "camelCase"
  });

  return {
    test: /\.scss$/,
    use: [
      ...css.use,
      {
        loader: "resolve-url-loader",
        options: {
          sourceMap: sourceMaps,
          root: path.join(__dirname, "src")
        }
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true
        }
      }
    ]
  };
};

module.exports = async (env = {}) => {
  const dev = !env.prod;

  const inlineRuntime = !dev;
  const extractCss = !dev;
  const outputBundleHash = !dev;
  const sourceMaps = !dev;
  const minifyHtml = !dev;
  const hashModuleNames = !dev;

  const devServerPort = Number(env.port) || 3001;
  const devServerApi = env.api || "http://localhost:3000";

  return {
    mode: dev ? "development" : "production",
    target: "web",
    entry: {
      main: ["core-js/stable", "./src/main.jsx"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        chunks: ["main"],
        template: "./src/views/main.html",
        filename: "index.html",
        minify: minifyHtml
      }),
      inlineRuntime && new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.+[.]js/]),
      extractCss &&
        new MiniCssExtractPlugin({
          filename: "static/css/[name].[contenthash:8].css",
          chunkFilename: "static/css/[name].[contenthash:8].chunk.css"
        }),
      new CleanWebpackPlugin()
    ].filter(Boolean),
    output: {
      path: path.join(__dirname, "build"),
      filename: outputBundleHash ? "static/js/[name].[contenthash:8].js" : "static/js/[name].bundle.js",
      publicPath: "/",
      chunkFilename: outputBundleHash ? "static/js/[name].[contenthash:8].chunk.js" : "static/js/[name].chunk.js",
      globalObject: "this"
    },
    module: {
      strictExportPresence: true,
      rules: [
        {parser: {requireEnsure: false}},
        javascriptRule(sourceMaps),
        urlRule(),
        scssRule(extractCss, sourceMaps, hashModuleNames),
        cssRule(extractCss, sourceMaps, false)
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    devServer: {
      port: devServerPort,
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: {
        disableDotRule: true,
        index: "/"
      },
      before(app, server) {
        app.use(
          "/rest",
          createProxyMiddleware({
            target: devServerApi,
            changeOrigin: true,
            logLevel: "warn"
          })
        );
      }
    }
  };
};
