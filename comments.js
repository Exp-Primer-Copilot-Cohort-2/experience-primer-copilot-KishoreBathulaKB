// Create web server with express
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var comments = require('./comments');
app.use('/comments', comments);

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
