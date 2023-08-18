const { user } = require('../../db');

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await user.destroy({ where: { id }, force: true });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteUser;
