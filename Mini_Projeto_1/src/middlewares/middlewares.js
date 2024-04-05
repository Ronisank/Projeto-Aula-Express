const info = (req, res, next) => {
    const horaAtual = new Date();
    console.log(`[${horaAtual}] A requisição foi feita para a rota: 
    ${req.method} ${req.originalUrl} 
    ${req.protocol}://${req.get('host')}
    ${req.headers['user-agent']}`);
    next();
}

module.exports = {
    info
};