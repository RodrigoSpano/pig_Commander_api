const { maxSpend } = require('../../db');

const deleteMaxSpend = async (req, res) => {
  try {
    const { id } = req.params;
    await maxSpend.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({ deleted: 'Max Spend deleted' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteMaxSpend;
