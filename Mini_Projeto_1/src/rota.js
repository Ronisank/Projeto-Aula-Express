const express = require('express');
const {criarProdutos} = require('./controllers/criarProdutos');
const {listarProdutos} = require('./controllers/listarProdutos');
const {atualizarProdutos} = require('./controllers/atualizarProdutos');
const {excluirProdutos} = require('./controllers/excluirProdutos');
const {info} = require('./middlewares/middlewares');

const rota = express();

rota.use("/produtos",info);


rota.post("/produtos", criarProdutos);
rota.get("/produtos", listarProdutos);
rota.put("/produtos/:id", atualizarProdutos);
rota.delete("/produtos/:id", excluirProdutos);

module.exports = rota;