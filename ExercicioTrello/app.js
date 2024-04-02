// Exercicio trello - 1

const e = require('express');
const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

//Exercicio trello - 2

// app.get('/sobre', (req, res) => {
//     res.send('Página sobre: Aplicativo em Node.js');
//     });

// app.get('/contato', (req, res) => {
//     res.send('Para entrar em contato, envie um email para: email@email.com');
//     });

// //Exercicio trello - 3

// const middleware = (req, res, next) => {
//     const horaAtual = new Date().toISOString();
//     console.log(`[${horaAtual}] A requisição foi feita para a rota: ${req.method} ${req.originalUrl} `);
//     next();
//     }

// //app.use(middleware);

// app.get('/hora', middleware,(req, res) => {
//    res.send("A hora atual é: " + new Date().getHours() + ":" + new Date().getMinutes());
//     });

// //Exercicio trello - 4

// const produtos = []


// app.get('/produtos/:id', (req, res) => {
//     const {id} = req.params;
//     const produto = produtos.find(produto => produto.id === parseInt(id));
//     if (!produto) {        
//         res.send(`Produto não encontrado`);
//         return;
//     }
//     res.json(produto);  
// });
// app.post('/produtos', (req, res) => {
//     const produto = req.body;
//     produto.id = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;
//     produtos.push(produto);
//     res.status(201).send("Produto adicionado com sucesso");
// });

// exercicio trello - 5

app.use(express.static("public/tira-duvidas"));



