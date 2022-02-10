"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Boards", "title", {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.changeColumn("Boards", "content", {
      type: Sequelize.TEXT,
      allowNull: false,
    });

    await queryInterface.changeColumn("Boards", "author", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Boards", "title", {
      type: Sequelize.STRING,
    });

    await queryInterface.changeColumn("Boards", "content", {
      type: Sequelize.STRING,
    });

    await queryInterface.changeColumn("Boards", "author", {
      type: Sequelize.STRING,
    });
  },
};
