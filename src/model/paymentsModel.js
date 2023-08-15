const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'payment',
    {
      id: {
        type: DataTypes.FLOAT,
        primaryKey: true,
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      date_approved: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
