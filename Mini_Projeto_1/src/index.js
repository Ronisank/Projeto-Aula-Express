const express = require('express');
const rota = require('./rota');
const info = require('./middlewares/middlewares');

const app = express();

app.use(express.json());
app.use(express.Router());
app.use(rota);
app.use(info.info);

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em - http://localhost:${port}`)
});


