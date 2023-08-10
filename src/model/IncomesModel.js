const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define(
    'incomes',
    {
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
        defaultValue: false
      },
      auto_date: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: true
      }
    },

  );
};

/* auto_date, es la fecha en la que por ejemplo recibo mi sueldo todos los dias  */