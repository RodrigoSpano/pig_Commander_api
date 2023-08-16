const { user } = require('../../db');

const banUser = async (req, res) => {
  try {
    const { id } = req.params;
    await user.destroy({
      where: { id },
    });
    return res.status(200).json({ success: 'User banned' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = banUser;
