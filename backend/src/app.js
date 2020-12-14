const express = require("express");
const octo = require("./octo");

const app = express();

app.get("/repos/:user", (req, res) => {
  octo.repos.listForUser({username: req.params.user})
    .then(response => res.send(response.data))
    .catch(err => res.send({error: true, errorMessage: err.message}));
});

app.use((req, res) => {
  res.status(404).send({
    error: true,
    errorMessage: "not found"
  });
});

module.exports = app;
