const { maxSpend } = require('../../db');

const getMaxSpend = async (req, res) => {
  try {
    const { id: user_id } = req.user.dataValues;
    const allExepenses = await maxSpend.findAll({
      where: {
        user_id,
      },
    });
    res.status(200).json(allExepenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = getMaxSpend;
