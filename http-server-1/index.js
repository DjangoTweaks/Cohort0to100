const express = require('express')
const port = 3000
const app = express(); //initializes express 
var bodyParser= require('body-parser');

app.use(bodyParser.json());

app.get('/', function(req, res){
  console.log(req.body);
  res.send('Hello Akshat!')
})

app.listen(port)