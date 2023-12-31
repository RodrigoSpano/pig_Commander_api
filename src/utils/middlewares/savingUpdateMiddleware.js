const { saving } = require('../../db');

const savingUpdateMiddleware = async (req, res, next) => {
  const { id } = req.params;
  const { amount, goal } = req.body;

  // *  I look for the id in the database
  const findIdSaving = await saving.findByPk(id);

  // * Check if it does not exist and send the error
  if (!findIdSaving) {
    // ! Error if not exist
    res.status(404).json({ error: 'Saving not found!' });
    return;
  }
  if (typeof amount === 'undefined' && typeof goal === 'undefined') {
    res.status(400).json({ error: 'Parameter amount and GOAL are not defined' });
    return;
  }

  if (amount <= 0 || goal <= 0) {
    res.status(400).json({ error: 'amount and Goal must be greater than 0' });
    return;
  }

  next();
};

module.exports = savingUpdateMiddleware;
