'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Tarefa = sequelize.define('Tarefa', {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 50],
          msg: 'O título deve ter entre 3 e 50 caracteres.'
        }
      }
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 255],
          msg: 'A descrição deve ter entre 3 e 255 caracteres.'
        }
      }
    },
    prazo: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: 'O prazo deve ser uma data válida.'
        },
        isAfter: {
          args: new Date().toISOString(),
          msg: 'O prazo deve ser uma data futura.'
        }
      }
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: {
          msg: 'O valor deve ser um número inteiro ou decimal.'
        },
        min: {
          args: [0],
          msg: 'O valor não pode ser negativo.'
        }
      }
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    underscored: true,
    timestamps: false,
    modelName: 'Tarefa',
    tableName: 'tarefas',
  });

  Tarefa.associate = (models) => {
    Tarefa.belongsToMany(models.Usuario, {
      through: 'TarefaUsuario', // Nome da tabela intermediária
      as: 'Usuarios', // Alias usado para acessar os usuários da tarefa
      foreignKey: 'tarefa_id', // Chave estrangeira referenciando a tarefa
      otherKey: 'usuario_id' // Chave estrangeira referenciando o usuário
    });
  };

  return Tarefa;
}
