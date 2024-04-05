const { info } = require("../middlewares/middlewares");
const {produtos} = require("../utils/produtos");


const listarProdutos = (info,(req, res) => {
    try {
    res.status(200).send(produtos);
} catch (error) {
    res.status(500).send(error.message);
    
}        
});

module.exports = {
    listarProdutos
};
