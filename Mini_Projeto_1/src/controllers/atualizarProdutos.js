const { info } = require("../middlewares/middlewares");
const {produtos} = require("../utils/produtos");

const atualizarProdutos = ("/produtos/:id", info,(req, res) => {
    const id = req.params.id;
    const produto = req.body;

    try {
        const produtoIndex = produtos.findIndex(produto => produto.id == id);

        if (produtoIndex < 0) {
            res.status(404).send("Produto não encontrado.");

        } else if (!produto.nome || !produto.preco || !produto.descricao || !produto.id) {
            res.status(400).send("Produto inválido. Verifique se o produto possui nome, preço, descrição e ID.");

        } else {
            produtos[produtoIndex] = produto;
            res.status(200).send(`Produto atualizado com sucesso:
             ${JSON.stringify(produto)}`);
        }
    } catch (error) {
        res.status(500).send("Erro ao atualizar produto.");
        console.log(error.message);
    }
});

module.exports = {
    atualizarProdutos
};