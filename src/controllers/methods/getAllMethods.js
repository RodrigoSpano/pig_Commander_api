 const methodsHandler = require('../../handlers/methods/methodsHandler'); 

const getAllMethods = async (req, res) => {
  try {
    // * Function handler, returns the methods of the database
    const allMethods = await methodsHandler();

    if (allMethods.length === 0) {
      res.status(404).json({ error: 'Methods not found' });
    } else {
      res.status(200).json(allMethods);
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

module.exports = getAllMethods;
