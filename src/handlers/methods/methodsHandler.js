const { method } = require('../../db');

// ! Default methods that are stored in the database
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

// * Handler that verifies if the methods are already there and if they are not, it creates them
// * This function handler is for the controller methods
const methodsHandler = async () => {
  const methodsAux = await method.findAll();

  if (methodsAux.length === 0) {
    await method.bulkCreate(methodsDefault);
  }

  const allMethods = await method.findAll();
  return allMethods;
};

module.exports = methodsHandler;
