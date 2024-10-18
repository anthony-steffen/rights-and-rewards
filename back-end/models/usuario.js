'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => sequelize.define('Usuario', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    modelName: 'Usuario',
    tableName: 'usuarios',
    underscored: true,
    timestamps: false,
  });
