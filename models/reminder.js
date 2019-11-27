'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reminder = sequelize.define('Reminder', {
    userId: DataTypes.INTEGER,
    message: DataTypes.STRING,
    event: DataTypes.STRING,
    minute: DataTypes.INTEGER,
    hour: DataTypes.INTEGER,
    dayofmonth: DataTypes.INTEGER,
    month: DataTypes.STRING,
    dayofweek: DataTypes.STRING
  }, {});
  Reminder.associate = function(models) {
    // associations can be defined here
  };
  return Reminder;
};