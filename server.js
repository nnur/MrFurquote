"use strict";

var app = require('express')();
var fetchQuote = require('./fetchQuote.js');

app.get('/', (req, res) => {
  res.send('animal crackers');
});

app.get('/quote', (req, res) => {
  fetchQuote(res);
});


app.listen(8000, function() {
  console.log('server is up!');
});