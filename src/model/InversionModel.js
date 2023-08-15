const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('inversion', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    started_on: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finish_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    earning: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
    { timestamps: false }
  );
};