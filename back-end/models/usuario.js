'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'Este nome de usuário já está em uso.'
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'Este e-mail já está cadastrado.'
    },
  },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
          msg: 'A senha precisa ter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.'
      }
    }
  }
  }, {
    modelName: 'Usuario',
    tableName: 'usuarios',
    underscored: true,
    timestamps: false,
  });
