'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersReminders = sequelize.define('UsersReminders', {
    userId: DataTypes.INTEGER,
    reminderId: DataTypes.INTEGER
  }, {});
  UsersReminders.associate = function(models) {
    // associations can be defined here
  };
  return UsersReminders;
};