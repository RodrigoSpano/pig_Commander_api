const { Op } = require('sequelize');
const { user } = require('../../db');

const banUser = async (req, res) => {
  try {
    const { id } = req.params;
    const bannedUser = await user.findOne({
      where: {
        id,
        deletedAt: { [Op.not]: null },
      },
      paranoid: false,
    });
    if (bannedUser) {
      return res.status(400).send('User has already been banned');
    }
    await user.destroy({
      where: { id },
    });
    return res.status(200).json(id);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = banUser;
