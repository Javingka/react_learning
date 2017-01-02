var express = require('express');

//Create our App

var app = express();
app.use( express.static('public') );

app.listen( 8000, function(){

  console.log('Express is up on port 8000');
})
