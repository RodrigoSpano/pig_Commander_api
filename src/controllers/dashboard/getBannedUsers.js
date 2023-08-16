const { Op } = require('sequelize');
const { user } = require('../../db');

const getBannedUsers = async (req, res) => {
  try {
    const bannedUsersCount = await user.count({
      where: {
        deletedAt: { [Op.not]: null },
      },
      paranoid: false,
    });
    return res.status(200).json(bannedUsersCount);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getBannedUsers;
