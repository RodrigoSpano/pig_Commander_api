const { inversion } = require('../../db');

const deleteInversion = async (req, res) => {
  try {
    // * I receive the id by params
    const { id } = req.params;

    // * Delete the Inversion with same id params
    await inversion.destroy({
      where: {
        id,
      },
    });

    // * Response if Inversion is deleted
    res.status(200).json({ deleted: 'Inversion deleted!' });
  } catch (error) {
    // ! Error internal server
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteInversion;
