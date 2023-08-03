const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'maxSpend',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      mount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

