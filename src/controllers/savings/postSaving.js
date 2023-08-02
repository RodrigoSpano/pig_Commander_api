const { saving } = require('../../db');

const postSaving = async (req, res) => {
  try {
    // * I receive the property by body
    const { name, mount, goal } = req.body;

    // * Auxiliary variable
    let newSaving;

    // * I search if it already exists in the database
    const existingSaving = await saving.findOne({
      where: { name: name.toLowerCase() },
    });

    //* if it already exists, I send the error and if it does not exist, it is created
    if (existingSaving) {
    // ! Error if exist
      res.status(409).json({ error: 'This saving already exists!' });
    } else {
    // * Saving are created
      newSaving = await saving.create({
        name: name.toLowerCase(),
        mount,
        goal,
      });
    }

    // * Response that is sent if everything goes ok
    res.status(200).json(newSaving);
  } catch (error) {
     // ! Error internal server
    res.status(500).json({ error: error.message });
  }
};

module.exports = postSaving;
