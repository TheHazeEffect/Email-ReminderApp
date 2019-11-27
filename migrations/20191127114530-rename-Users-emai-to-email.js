'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Users', 'emai', 'email', {
      type: Sequelize.String,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Users', 'email', 'emai', {
      type: Sequelize.String
    })
  }
};
