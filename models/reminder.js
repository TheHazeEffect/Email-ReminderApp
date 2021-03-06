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
    dayofweek: DataTypes.STRING,
    repeat: DataTypes.BOOLEAN
  }, {});
  Reminder.associate = function (models) {
    // associations can be defined here
    Reminder.belongsTo(models.User, { foreignKey: 'userId', as: 'User' })
  };
  return Reminder;
};