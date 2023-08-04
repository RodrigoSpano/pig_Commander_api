const { maxSpend } = require('../../db');

const updateMaxSpend = async (req, res) => {
  try {
    const { id } = req.params;
    const { mount } = req.body;
    await maxSpend.updateOne(
      {
        mount,
      },
      {
        where: { id },
      }
    );
    const updatedMaxSpend = await maxSpend.findByPk(id);
    return res.status(200).json(updatedMaxSpend);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateMaxSpend;
