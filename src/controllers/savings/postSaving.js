const { saving } = require('../../db');

const postSaving = async (req, res) => {
  try {
    // * I receive the property by body
    const { name, mount, goal } = req.body;

    // * Saving are created
    const newSaving = await saving.create({
      name: name.toLowerCase(),
      mount,
      goal,
    });

    // * Response that is sent if everything goes ok
    res.status(200).json(newSaving);
  } catch (error) {
    // ! Error internal server
    res.status(500).json({ error: error.message });
  }
};

module.exports = postSaving;
