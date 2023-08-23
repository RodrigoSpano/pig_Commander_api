const { user } = require('../../db');
const { sendForgotPasswordNotification } = require('../../utils/helpers/sendMailHelper');

const forgotPasswordSendEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const findUser = await user.findOne({ where: { email } });
    if (!findUser) return res.status(404).json({ error: 'user not found' });
    sendForgotPasswordNotification(findUser);
    return res.status(202).json({ message: 'email sent' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = forgotPasswordSendEmail;