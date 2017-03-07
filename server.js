var express = require('express');
var app = express();
var bodyParser = require('body-parser')
PORT = process.env.PORT || 3000;



app.use(express.static(__dirname + '/app'));


app.listen(PORT, function() {
	console.log ("I am connected to PORT " + PORT);
})