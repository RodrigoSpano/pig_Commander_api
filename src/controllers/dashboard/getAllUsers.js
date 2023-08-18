const { Op } = require('sequelize');
const { user } = require('../../db');

const getAllUsers = async (req, res) => {
  try {
    const allCount = await user.count({
      where: {
        email: {
          [Op.ne]: 'pigcommandersp@gmail.com',
        },
      },
      paranoid: false,
    });
    return res.status(200).json(allCount);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllUsers;
