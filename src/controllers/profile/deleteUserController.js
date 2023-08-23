const { user } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const deleteUser = async (req, res) => {
  try {
    const { id } = getTokenPayload(req.headers['authorization']);
    await user.destroy({ where: { id }, force: true });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteUser;
