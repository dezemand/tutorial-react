module.exports = {
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/prop-types": "off"
  }
};
