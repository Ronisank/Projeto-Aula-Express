const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    });

const usuarios = [
    {
    "nome":"Fulano",
    "idade": 20,
    "id": 1
    },
    {
    "nome":"Ciclano",
    "idade": 25,
    "id": 2
    }
    
];

app.post('/users', (req, res) => {
    const usuario = req.body;
    usuario.id = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
    usuarios.push(usuario);
    res.status(201).send('Usuário adicionado com sucesso');
    
});
app.get('/users', (req, res) => {
    res.json(usuarios);
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const usuario = usuarios.find(usuario => usuario.id === parseInt(id));
    if (!usuario) {
        res.send('Usuário não encontrado');
        return;
    }
    res.json(usuario);
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { nome, idade} = req.body;
    const usuario = usuarios.find(usuario => usuario.id === parseInt(id));
    if (!usuario) {
        res.status(404).send('Usuário não encontrado');
        return;
    }
    usuario.nome = nome;
    usuario.idade = idade;
    res.send('Usuário atualizado com sucesso');
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const index = usuarios.findIndex(usuario => usuario.id === parseInt(id));
    if (index === -1) {
        res.status(404).send('Usuário não encontrado');
        return;
    }
    usuarios.splice(index, 1);
    res.send('Usuário removido com sucesso');
});