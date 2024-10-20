'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TarefaUsuario', {
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      tarefa_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tarefas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TarefasUsuarios');
  }
};