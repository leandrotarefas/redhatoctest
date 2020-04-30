var express = require("express");
var app = express();

app.get('/', function(req, res) {
    res.send('Hello world!\n');
  });

app.get('/mars', function(req, res) {
    res.send('Hello Mars!\n');
  });

  app.listen(8080,function() {
    console.log("app inicializada co sucesso!");
  })