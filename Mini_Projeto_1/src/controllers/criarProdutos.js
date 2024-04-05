const { info } = require("../middlewares/middlewares");
const {produtos} = require("../utils/produtos");

const criarProdutos = (info,(req, res) => {
    const novoProduto = req.body;
    
    try {
        if (!novoProduto.nome || !novoProduto.preco || !novoProduto.descricao) {
            res.status(400).send("Produto inválido. Verifique se o produto possui nome, preço e descrição.");
        } else {
            novoProduto.id = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;
            produtos.push(novoProduto);
            res.status(201).send(`Produto adicionado com sucesso:
             ${JSON.stringify(novoProduto)}`);
        }
    } catch (error) {
        res.status(500).send("Erro ao adicionar produto.");
        console.log(error.message);
    }
});

module.exports = {
    criarProdutos    
};