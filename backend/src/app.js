const express = require("express");
const apiRoute = require("./api");

const app = (module.exports = express());

app.use("/rest", apiRoute);

app.use((req, res) => {
  res.status(404).send({
    error: true,
    errorMessage: "not found",
  });
});
