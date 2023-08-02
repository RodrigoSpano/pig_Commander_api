const { comparePassword, createJwtToken } = require('../../utils/helpers/authHelpers');

const { user } = require('../../db');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await user.findOne({ where: { email } });
    if (!findUser) return res.status(404).json({ message: 'user not found' });
    const isMatch = comparePassword(findUser.password, password);
    if (!isMatch) return res.status(400).json({ message: 'invalid credentials' });
    const token = createJwtToken(findUser.id, findUser.email);
    const userRes = { name: findUser.name, lastname: findUser.lastname, email: findUser.email, premium: findUser.premium };
    return res.status(202).json({ token, user: userRes });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { loginUser };