const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('saving', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    goal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};