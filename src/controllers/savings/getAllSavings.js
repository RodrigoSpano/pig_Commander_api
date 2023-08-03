const { saving } = require('../../db');

const getAllSavings = async (req, res) => {
  try {
    // * I look up all the savings in the database
    const allSavings = await saving.findAll();

    // * If there are no savings I respond with a 404 error
    if (allSavings.length === 0) {
      // ! Error if not exist
      res.status(404).json({ error: 'Savings not found!' });
    } else {
      // * Response if there are savings
      res.status(200).json(allSavings);
    }
  } catch (error) {
    // ! Error internal server
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllSavings;
