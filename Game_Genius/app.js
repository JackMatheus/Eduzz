const express = require('express');
const request = require('request');
const rp = require('request-promise');
const path = require('path');

var router = express.Router();

const app = express();

app.set("views", "./");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"")));

app.get('/', (req, res) => {
  res.render('index');

});

app.listen(3000, () => {
  console.log("Servidor rodando na porta: 3000")
});

module.exports = app;

