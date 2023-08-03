const { saving } = require('../../db');

const deleteSaving = async (req, res) => {
  try {
    // * I receive the id by params
    const { id } = req.params;

    // * Delete the saving with same id params
    await saving.destroy({
      where: {
        id,
      },
    });

    // * Response if saving is deleted
    res.status(200).json({ deleted: 'Saving deleted!' });
  } catch (error) {
    // ! Error internal server
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteSaving;
