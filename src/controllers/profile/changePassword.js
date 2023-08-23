const { user } = require('../../db');
const {
  getTokenPayload,
  hashPassword,
} = require('../../utils/helpers/authHelpers');

const updatePassword = async (req, res) => {
  try {
    const { id } = getTokenPayload(req.headers['authorization']);
    const { newPassword } = req.body;
    const hashedPass = hashPassword(newPassword);
    const currentUser = await user.findOne({ where: { id } });
    await currentUser.update({ password: hashedPass });
    return res.status(200).json({ Updated: 'Password updated' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updatePassword;
