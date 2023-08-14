const { createExpenseAutomatization, createIncomeAutomatization } = require('../../handlers/automatization/automatizationHandler');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');


const createAutoTransaction = async (req, res) => {
  try {
    const { id } = getTokenPayload(req.headers['authorization']);
    if (req.body.type === 'expense') {
      const automatization = await createExpenseAutomatization(req.body, id);
      if (automatization.automatized) return res.status(201).json({ success: true, message: 'automatized transaction created!' });
    }
    else if (req.body.type === 'income') {
      const automatization = await createIncomeAutomatization(req.body, id);
      if (automatization.automatized) return res.status(201).json({ success: true, message: 'automatized transaction created!' });
    }
    return res.status(400).json({ error: 'something went wrong' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createAutoTransaction };