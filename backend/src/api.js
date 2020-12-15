const express = require("express");
const octo = require("./octo");

const route = (module.exports = express.Router());

route.get("/repos/:user", (req, res) => {
  octo.repos
    .listForUser({ username: req.params.user })
    .then((response) => res.send(response.data))
    .catch((err) => res.send({ error: true, errorMessage: err.message }));
});

route.get("/repos/:user/:repo", (req, res) => {
  octo.repos
    .get({
      owner: req.params.user,
      repo: req.params.repo,
    })
    .then((response) => res.send(response.data))
    .catch((err) => res.send({ error: true, errorMessage: err.message }));
});

route.get("/repos/:user/:repo/readme", (req, res) => {
  octo.repos
    .getReadme({
      owner: req.params.user,
      repo: req.params.repo,
    })
    .then((response) => res.send(response.data))
    .catch((err) => res.send({ error: true, errorMessage: err.message }));
});

route.use((req, res) => {
  res.status(404).send({
    error: true,
    errorMessage: "not found",
  });
});
