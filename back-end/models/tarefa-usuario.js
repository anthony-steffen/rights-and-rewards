'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const TarefasUsuario = sequelize.define('TarefasUsuario', {
    usuario_id: DataTypes.INTEGER,
    tarefa_id: DataTypes.INTEGER
  }, {
    underscored: true,
    timestamps: false,
    modelName: 'TarefasUsuario',
    tableName: 'TarefaUsuario',
  });
  return TarefasUsuario;
};