const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('review', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.FLOAT,
      validate: {
        min: 1,
        max: 5,
      },
    },
  });
};
