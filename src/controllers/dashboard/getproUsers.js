const { user } = require('../../db');

const getproUsers = async (req, res) => {
  try {
    const allCount = await user.count({
      where: {
        premium: true,
      },
      paranoid: false,
    });
    return res.status(200).json(allCount);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getproUsers;
