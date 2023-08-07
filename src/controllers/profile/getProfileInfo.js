const { user } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const getUserData = async (req, res) => {
  try {
    const token = req.headers['Authorization'];
    const user_id = getTokenPayload(token);
    const findUser = await user.findByPk(user_id);
    if (!findUser) return res.status(404).json({ error: 'user not found' });
    return res.status(200).json({ user: findUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getUserData;