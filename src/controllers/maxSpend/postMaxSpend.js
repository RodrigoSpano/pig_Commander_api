const { maxSpend } = require('../../db');

const postMaxSpend = async (req, res) => {
  try {
    const { id: user_id } = req.user.dataValues;
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
