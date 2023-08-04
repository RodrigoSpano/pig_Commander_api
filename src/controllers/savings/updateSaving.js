const { saving } = require('../../db');

const updateSaving = async (req, res) => {
  try {
    // * I receive the id by body
    const { id } = req.params;

    // * I update the saving with the same id
    await saving.update(req.body, {
      where: { id },
    });

    // * Search the saving with the same id and updated
    const savingUpdate = await saving.findByPk(id);

    // * Response that is sent if everything goes ok
    res.status(200).json(savingUpdate);
  } catch (error) {
    // ! Error internal server
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateSaving;
