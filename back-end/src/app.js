const express = require('express');

const app = express();

//Middleware para o Express para lidar com requisições em JSON
app.use(express.json());


//Importando rotas
const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');
const authRouter = require('./routes/auth');


//Usando as rotas importadas
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);
app.use('/auth', authRouter);

module.exports = app;