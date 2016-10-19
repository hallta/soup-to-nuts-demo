var express = require('express');
var app = express();

var webController = require('./controller/web');

app.get('/', function (req, res) {
  console.log(webController);
  res.send(webController.helloWorld);
});

app.get('/folder/*', function (req, res) {
  res.send('Hello World, in a new folder :)');
});

// Start the server
console.log('Starting server...');
app.listen(3000);
console.log('Server started and listening on port 3000!');
