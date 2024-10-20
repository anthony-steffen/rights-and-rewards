const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');

//Importando o modelo de usuário
const {Usuario} = require('../../models')


//Rotas CRUD para usuários
router.get('/', authenticateToken, async (req, res) => {
  const users = await Usuario.findAll();
  res.json(users);
});

router.post('/', authenticateToken, async (req, res) => {
    // Lógica para criar um usuário
    res.send('Usuário criado');
});

router.put('/:id', authenticateToken, (req, res) => {
    // Lógica para atualizar um usuário pelo ID
    res.send(`Usuário com ID ${req.params.id} atualizado`);
});

router.delete('/:id', authenticateToken, (req, res) => {
    // Lógica para deletar um usuário pelo ID
    res.send(`Usuário com ID ${req.params.id} deletado`);
});

module.exports = router;
