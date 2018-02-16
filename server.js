/*
const express = require('express');

const app = express();
const port = process.env.PORT || z;

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'É nóis mano. API funcionando perfeitamente :) HAHAHA' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
*/

var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/client'))

app.get('/api/mensagem', (request, response) => {
  response.send({express: 'É nóis mano. API funcionando perfeitamente :) HAHAHA!'})
});

app.listen(app.get('port'), () => {
  console.log("Rodando em localhost: " + app.get('port'))
})
