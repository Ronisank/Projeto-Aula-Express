const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Servidor rodando na rota - http://localhost:3000}`);
});

const produtos = [
    {
        "nome": "Produto 1",
        "preço": 100,
        "descrição": "Caneta Azul",
        id: 1
    },
    {
        "nome": "Produto 2",
        "preço": 200,
        "descrição": "Caneta Preta",
        id: 2
    },
    {
        "nome": "Produto 3",
        "preço": 300,
        "descrição": "Caneta Vermelha",
        id: 3
    }
];

app.post("/produtos", (req, res) => {
    const produto = req.body

    const novoProduto = produto;

    if (!novoProduto.nome || !novoProduto.preço || !novoProduto.descrição) {
        res.status(400).send("Produto inválido. Verifique se o produto possui nome, preço e descrição.");
        return;
    } else {
        novoProduto.id = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;
        produtos.push(novoProduto);
        res.status(201).send(`Produto adicionado com sucesso: ${JSON.stringify(novoProduto)}`);
    }
})
app.get("/produtos", (req, res) => {
    res.status(200).send(produtos);
});