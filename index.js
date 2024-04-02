const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

// app.get('/', (req, res) => {
//   res.send('Olá, Mundo!!!!!!!!!Express, Seja bem vindo ao meu site!');
// });

// app.get('/contato', (req, res) => {
//   res.send('Página de contato');
// });

// app.get('/:nome', (req, res) => {
//     let nome = req.params.nome;
//     res.send('Olá! ' + req.params.nome+', Seja bem vindo ao meu site!');
  
// });
// app.get("/",function(req, res){
//   res.sendFile(__dirname + "/public/index.html")
// })
app.get("/busca", (req, res) => {
  // let parametro = req.query.parametro

  const { nome, idade, cpf } = req.query

  // Verificar se o parâmetro "parametro" está presente!
  if(!nome) {
      return res.status(400).json({
          error: "Parametros da Query estão faltando: nome"
      })
  }
  if (!cpf) {
    return res.status(400).json({
      error: "Parametros da Query estão faltando: cpf"
    })
  }

  res.json({ message: `Você pesquisou por: ${nome}, ${idade}, ${cpf}`})
})

let pessoas = [];

app.post("/pessoas", (req, res) => {
  const { nome, idade, ativo } = req.body

  let novaPessoa = {nome, idade, ativo}

  pessoas.push(novaPessoa)

  res.status(201).send(`Pessoa adicionada com sucesso: ${JSON.stringify(novaPessoa)}` );

})
app.get("/pessoas", (req, res) => {
  res.json(pessoas)
});