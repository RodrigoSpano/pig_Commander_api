const { maxSpend } = require('../../db');

const updateMaxSpend = async (req, res) => {
  try {
    const { id: user_id } = req.user.dataValues;
    const { mount } = req.body;
    await maxSpend.updateOne(
      {
        mount,
      },
      {
        where: { user_id },
      }
    );
    const updatedMaxSpend = await maxSpend.findByPk(user_id);
    return res.status(200).json(updatedMaxSpend);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateMaxSpend;
