const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

// CONFIGURATION  =====================================
app.use(express.static(__dirname + '/client/public'));     // set static files loc

// ROUTES =============================================

// application routes --------------------------------
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/public/index.html'));
});

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'É nóis mano. API funcionando perfeitamente :) HAHAHA' });
});

app.listen(port, () => console.log(`Rodando em localhost: ${port}`));