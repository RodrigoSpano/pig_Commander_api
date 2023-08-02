const { method } = require('../../db');

const methodsDefault = [
  {
    name: 'Cash',
  },
  {
    name: 'Transfer',
  },
  {
    name: 'Debit',
  },
  {
    name: 'Credit',
  },
];

const methodsHandler = async () => {
  try {
    const methodsAux = await method.findAll();

    if (methodsAux.length === 0) {
      await method.bulkCreate(methodsDefault);
    }

    const allMethods = await method.findAll();
    return allMethods;
  } catch (error) {
    console.error('Error al manejar los métodos:', error);
    throw error;
  }
};

module.exports = methodsHandler;
