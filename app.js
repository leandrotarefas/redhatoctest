var express = require("express");
var app = express();

app.get('/', function(req, res) {
    res.send('Hello world!\n');
  });

  app.get('/br', function(req, res) {
    res.send('Amo voce Maarick!\n');
  });

  app.get('/fr', function(req, res) {
    res.send('Love you Maarick!\n');
  });

  app.listen(8080,function() {
    console.log("app inicializada co sucesso!");
  })