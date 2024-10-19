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
  try {
    const { nome, email, senha } = req.body;
    
    // Cria o novo usuário
    const newUser = await Usuario.create({ nome, email, senha });
    res.status(201).json({
      message: `Usuário criado com ID: ${newUser.id}, Nome: ${newUser.nome}, Email: ${newUser.email}`
    });
  } catch (error) {
    // Tratamento de erro de unicidade
    if (error.name === 'SequelizeUniqueConstraintError') {
      const errorMessage = error.errors.map(e => e.message).join(', ');
      return res.status(400).json({ error: errorMessage });
    }
    
    // Tratamento de outros erros
    res.status(500).json(error.message);
  }
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
