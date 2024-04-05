const { info } = require("../middlewares/middlewares");
const {produtos} = require("../utils/produtos");

const excluirProdutos = ("/produtos/:id", info,(req, res) => {
    const id = req.params.id;

    try {
        const produtoIndex = produtos.findIndex(produto => produto.id == id);

        if (produtoIndex < 0) {
            res.status(404).send("Produto não encontrado.");
        } else {
            produtos.splice(produtoIndex, 1);
            res.status(200).send("Produto removido com sucesso.");
        }
    } catch (error) {
        return res.status(500).send("Erro ao remover produto.");
    }
});

module.exports = {
    excluirProdutos
};