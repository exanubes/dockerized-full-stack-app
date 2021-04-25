'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: 'created_at',
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: 'updated_at',
        },
      });
      await queryInterface.sequelize.query(
        `INSERT INTO users(id, name, created_at, updated_at) VALUES(DEFAULT, 'Jack', NOW(), NOW()), (DEFAULT, 'JOHN', NOW(), NOW()), (DEFAULT, 'Jerry', NOW(), NOW())`,
      );
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface) {
    try {
      await queryInterface.dropTable('users');
    } catch (error) {
      console.log(error);
    }
  },
};
