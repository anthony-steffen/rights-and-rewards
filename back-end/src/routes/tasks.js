const express = require('express');
const router = express.Router();
const {Tarefa} = require('../../models');

// Exemplo de rotas CRUD para tarefas
router.get('/', async (req, res) => {
    const tarefas = await Tarefa.findAll();
    res.json(tarefas);
});

router.post('/', async (req, res) => {
    // Lógica para criar uma nova tarefa
    res.send('Tarefa criada');
});

router.put('/:id', (req, res) => {
    // Lógica para atualizar uma tarefa pelo ID
    res.send(`Tarefa com ID ${req.params.id} atualizada`);
});

router.delete('/:id', (req, res) => {
    // Lógica para deletar uma tarefa pelo ID
    res.send(`Tarefa com ID ${req.params.id} deletada`);
});

module.exports = router;
