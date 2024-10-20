'use strict';

const tarefasDiarias = require('../utils/default-seed');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tarefas', tarefasDiarias.map(tarefa => ({
      titulo: tarefa.title,
      descricao: tarefa.description,
      prazo: tarefa.prazo,
      valor: tarefa.valor,
      done: tarefa.done,
    }))), {
      underscored: true,
      timestamps: false,
      modelName: 'TarefasUsuario',
      tableName: 'TarefaUsuario',
    };
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tarefas', null, {});
  }
};
