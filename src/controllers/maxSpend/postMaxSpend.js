const { maxSpend } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const postMaxSpend = async (req, res) => {
  try {
    const user_id = getTokenPayload(req.headers['authorization']);
    const { mount } = req.body;
    const newExpense = await maxSpend.create({
      mount,
      user_id,
    });
    return res.status(201).json(newExpense);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = postMaxSpend;
