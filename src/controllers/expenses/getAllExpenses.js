const { expenses } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const getAllExpenses = async (req, res) => {
  try {
    const { id } = getTokenPayload(req.headers['authorization']);
    const allExepenses = await expenses.findAll({ where: { user_id: id, automatized: false } });
    return res.status(200).json(allExepenses);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = getAllExpenses;
