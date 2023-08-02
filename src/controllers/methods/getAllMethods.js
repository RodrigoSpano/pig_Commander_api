const methodsHandler = require('../../handlers/methods/methodsHandler');

const getAllMethods = async (req, res) => {
  try {
    const allMethods = await methodsHandler();
    res.status(200).json(allMethods);
  } catch (error) {
    res.status(404).send('error');
  }
};

module.exports = getAllMethods;
