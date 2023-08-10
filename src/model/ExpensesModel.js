const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('expenses', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
    },
    automatized: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    auto_date: {
      type: DataTypes.DATE,
      defaultValue: null,
      allowNull: true,
    },
  });
};
