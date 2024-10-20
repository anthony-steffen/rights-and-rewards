const express = require('express');
const router = express.Router();
const {Tarefa} = require('../../models');
const {Usuario} = require('../../models');

// Importa o middleware de autenticação
const authenticateToken = require('../middlewares/authenticateToken');

// Retorna as tarefas predefinidas
router.get('/', authenticateToken, async (req, res) => {
    try {
        const tarefas = await Tarefa.findAll();
        res.json(tarefas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tarefas' });
    }
});

router.post('/', authenticateToken, async (req, res) => {
    // Lógica para criar uma tarefa aqui
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
