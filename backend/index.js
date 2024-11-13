const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

console.log('no ar');

app.post('/ticket', (req, res) => {
    const alert = req.body;  // Aqui você recebe os dados do webhook
    // Criar ticket no sistema PraTIca ou realizar outro processo
    console.log(alert);
    console.log('ticket criado');
    res.status(200).send('ticket criado');
});

app.listen(3000, () => {
    console.log('App rodando na porta 3000');
});
