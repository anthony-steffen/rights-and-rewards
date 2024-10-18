'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => sequelize.define('Usuario', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        arg: true,
        msg: 'Nome já cadastrado'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        arg: true,
        msg: 'Email já cadastrado'
      },
    },
    senha: DataTypes.STRING
  }, {
    modelName: 'Usuario',
    tableName: 'usuarios',
    underscored: true,
    timestamps: false,
  });
