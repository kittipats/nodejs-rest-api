import express from 'express';

var app = express();
var port = process.env.PORT || 3031;

app.get('/', function(req, res) {
  res.send('Nei Hou!');
});

app.listen(port, function() {
  console.log("Running on port " + port);
})
