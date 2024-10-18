const express = require('express');
const router = express.Router();

//Importando o modelo de usuário
const {Usuario} = require('../../models')


//Rotas CRUD para usuários
router.get('/', async (req, res) => {
  const users = await Usuario.findAll();
  res.json(users);
});

router.post('/', async(req, res) => {
    const newUser = await Usuario.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    });
    res.status(201).json({
      message:`usuário criado com ${newUser.id}, ${newUser.nome}, ${newUser.email}, ${newUser.senha}`
    });
});

router.put('/:id', (req, res) => {
    // Lógica para atualizar um usuário pelo ID
    res.send(`Usuário com ID ${req.params.id} atualizado`);
});

router.delete('/:id', (req, res) => {
    // Lógica para deletar um usuário pelo ID
    res.send(`Usuário com ID ${req.params.id} deletado`);
});

module.exports = router;
