/* eslint-disable no-unused-vars */
const { incomes } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');
const {
  sendIncomesNotification,
} = require('../../utils/helpers/sendMailHelper');

const createIncome = async (req, res) => {
  try {
    const { id: user_id } = getTokenPayload(req.headers['authorization']);
    const { amount, category_id, method_id, name } = req.body;

    if (!amount || amount < 1 || !category_id || !method_id || !name) {
      return res.status(404).json({ error: 'Missing data..' });
    }

    // Creacion o busqueda
    const newIncome = await incomes.create({
      user_id,
      name,
      amount,
      category_id,
      method_id,
    });

    sendIncomesNotification(user_id, amount, name);
    return res.status(200).json(newIncome);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createIncome;
