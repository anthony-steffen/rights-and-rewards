'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Este nome de usuário já está em uso.'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Este e-mail já está cadastrado.'
      }
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
    tableName: 'usuarios',
    underscored: true,
    timestamps: false,
    hooks: {
      // Criptografa a senha antes de salvar no banco
      beforeCreate: async (usuario) => {
        const salt = await bcrypt.genSalt(10);
        usuario.senha = await bcrypt.hash(usuario.senha, salt);
      },
      beforeUpdate: async (usuario) => {
        if (usuario.changed('senha')) {
          const salt = await bcrypt.genSalt(10);
          usuario.senha = await bcrypt.hash(usuario.senha, salt);
        }
      }
    }
  });

  // Método para validar a senha durante o login
  Usuario.prototype.validPassword = async function (senha) {
    return bcrypt.compare(senha, this.senha);
  };

  Usuario.associate = (models) => {
    Usuario.belongsToMany(models.Tarefa, {
      through: 'TarefaUsuario', // Nome da tabela intermediária
      as: 'Tarefas', // Alias usado para acessar as tarefas do usuário
      foreignKey: 'usuario_id', // Chave estrangeira referenciando o usuário
      otherKey: 'tarefa_id' // Chave estrangeira referenciando a tarefa
    });
  };

  return Usuario;
};
