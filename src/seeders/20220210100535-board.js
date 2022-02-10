"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Boards", [
      {
        title: "test 1",
        content: "테스트 1",
        author: "테스터1",
      },
      {
        title: "test 2",
        content: "테스트 2",
        author: "테스터2",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Boards", null, {});
  },
};
