const express = require('express');
const router = express.Router();
const {Tarefa} = require('../../models');

// Importa o middleware de autenticação
const authenticateToken = require('../middlewares/authenticateToken');

// Exemplo de rotas CRUD para tarefas
router.get('/', authenticateToken, async (req, res) => {
    const tarefas = await Tarefa.findAll();
    res.json(tarefas);
});

router.post('/', authenticateToken, async (req, res) => {
    // Lógica para criar uma nova tarefa
    res.send('Tarefa criada');
});

router.put('/:id',authenticateToken, (req, res) => {
    // Lógica para atualizar uma tarefa pelo ID
    res.send(`Tarefa com ID ${req.params.id} atualizada`);
});

router.delete('/:id', authenticateToken, (req, res) => {
    // Lógica para deletar uma tarefa pelo ID
    res.send(`Tarefa com ID ${req.params.id} deletada`);
});

module.exports = router;
