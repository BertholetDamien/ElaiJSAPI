console.time("Started in");

var express         = require('express');
var compression     = require('compression');
var bodyParser      = require("body-parser");
var controller      = require("./modules/controller");
var favicon         = require('serve-favicon');

var app = express();

app.use(compression());
app.use(express.static('./public'));
app.use(express.static('../elaijs'));
//app.use(favicon(__dirname + '/public/images/favicon.png'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/rest/:name', controller());

app.get("*.js", ressourcesNotFound);
app.get("*.css", ressourcesNotFound);
app.get("*.png", ressourcesNotFound);
app.get("*.json", ressourcesNotFound);
app.get("*.properties", ressourcesNotFound);
app.get("*.gif", ressourcesNotFound);

function ressourcesNotFound(req, res) {
  res.writeHead(404);
  res.end();
}

app.get("*", function(req, res) {
  res.writeHead(301, {
    'Location': '/#404'
  });
  res.end();
});

app.listen(8080);

console.timeEnd("Started in");