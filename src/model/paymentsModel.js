const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'payment',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      date_approved: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      aamount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
