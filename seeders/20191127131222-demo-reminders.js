'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reminders', [{
      userId: 1,
      event: "COA Class",
      message: "Hey! Remember you have COA Class",
      minute: 32,
      hour: 23,
      dayofmonth: null,
      month: null,
      dayofweek: "Tuesday",
      repeat: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      event: "COA Class2",
      message: "Hey this a second reminder for COA class =D",
      minute: 32,
      hour: 23,
      dayofmonth: null,
      month: null,
      dayofweek: "Tuesday",
      repeat: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
