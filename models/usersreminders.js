'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersReminders = sequelize.define('UsersReminders', {
    userId: DataTypes.INTEGER,
    reminderId: DataTypes.INTEGER
  }, {});
  UsersReminders.associate = function (models) {
    // associations can be defined here
    UsersReminders.belongsTo(models.User, { foreignKey: 'userId' })
    UsersReminders.belongsTo(models.Reminder, { foreignKey: 'reminderId' })
  };
  return UsersReminders;
};