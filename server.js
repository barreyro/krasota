//Lines 1-2 utilize the Express server
var express = require('express');
var app = express();
//body-parser is a module that allows you to read the data that the client sends over in a request
var bodyParser = require('body-parser');
//knex is the tool that allows you to write JS in order to interact with your database
var knex = require('./db/knex');

//bodyParser is middleware that every request that comes into the server has to pass through this module
app.use(bodyParser.urlencoded({ extended: false }));

//Required for Express to read static files
app.use(express.static(__dirname + '/public'));

//Routes
app.get('/users', function(req, res) {
  knex('users').select()
  .then(function(data){
    res.send(data);
  });
});


app.post('/users', function(req, res) {
  knex('users').insert(req.body)
  .then(function(id){
    res.redirect('/');
  });
});


//bind server to port 3000
app.listen(3000, function(){
  console.log('Listening on Port 3000');
});
