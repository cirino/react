/*
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'É nóis mano. API funcionando perfeitamente :) HAHAHA' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
*/

var express = require('express')
var app = express()

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
const url = 'mongodb://localhost:27017';
const dbName = 'versaobeta';

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/api/mensagem', (request, response) => {
  response.send({express: 'É nóis mano. API funcionando perfeitamente :) HAHAHA!'})
});

app.listen(app.get('port'), () => {
  console.log("Rodando em localhost: " + app.get('port'))
})

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Não conectou no servidor mongodb");
 
  const db = client.db(dbName);
 
  client.close();
});