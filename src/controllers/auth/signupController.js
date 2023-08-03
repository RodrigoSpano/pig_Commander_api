const { user } = require('../../db');
const { hashPassword } = require('../../utils/helpers/authHelpers');

const signupUser = async (req, res) => {
  try {
    const { email, password, name, lastname, image } = req.body;
    if (!email || !password || !name || !lastname) return res.status(400).json({ message: 'fields are required' });
    const hashedPass = hashPassword(password);
    const newUser = await user.create({ email, password: hashedPass, name, lastname, image });
    if (!newUser) return res.status(400).json({ error: 'cant create user' });
    return res.status(201).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = signupUser; 