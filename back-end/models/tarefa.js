'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => sequelize.define('Tarefa', {
    descricao: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    status: DataTypes.BOOLEAN,
  }, {
    underscored: true,
    timestamps: false,
    modelName: 'Tarefa',
    tableName: 'tarefas',
  });
