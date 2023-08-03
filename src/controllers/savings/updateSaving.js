const { saving } = require('../../db');

const updateSaving = async (req, res) => {
  try {
    const { id } = req.params;
    const { mount, goal } = req.body;
    await saving.update(
      {
        mount,
        goal,
      },
      {
        where: { id },
      }
    );
    const savingUpdate = await saving.findByPk(id);
    res.status(200).json(savingUpdate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateSaving;
