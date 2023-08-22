const { user } = require('../../db');

const banUser = async (req, res) => {
  try {
    const { id } = req.params;
    const unbannedUser = await user.findOne({
      where: {
        id,
        deletedAt: null,
      },
      paranoid: false,
    });
    if (unbannedUser) {
      return res.status(400).send('User has already been banned');
    }
    await user.restore({
      where: { id },
    });
    return res.status(200).json(id);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = banUser;
