const { inversion } = require('../../db');

const updateInversion = async (req, res) => {
  try {
    // * I receive the id by body
    const { id } = req.params;

    // * I receive the property by body
    const { amount, earning } = req.body;

    // * I update the inversion with the same id
    await inversion.update(
      {
        amount,
        earning,
      },
      {
        where: { id },
      }
    );

    // * Search the inversion with the same id and updated
    const inversionUpdate = await inversion.findByPk(id);

    // * Response that is sent if everything goes ok
    res.status(200).json(inversionUpdate);
  } catch (error) {
    // ! Error internal server
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateInversion;
