const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public', 'index.html')))

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'É nóis mano. API funcionando perfeitamente :) HAHAHA' });
});

app.listen(port, () => console.log(`Rodando em localhost: ${port}`));



const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
const url = 'mongodb://localhost:27017';
const dbName = 'versaobeta';

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Conectou no servidor mongodb");
 
  const db = client.db(dbName);
 
  client.close();
});