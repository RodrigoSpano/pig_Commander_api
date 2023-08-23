const { user } = require('../../db');
const { hashPassword } = require('../../utils/helpers/authHelpers');

const recoveryChangePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const findUser = await user.findByPk(id);
    if (!findUser) return res.status(404).json({ error: 'user not found' });
    findUser.update({ password: hashPassword(password) });
    return res.status(202).json({ success: true, message: 'password updated successfully!' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = recoveryChangePassword;