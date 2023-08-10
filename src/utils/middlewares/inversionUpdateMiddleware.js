const { inversion } = require('../../db');

const inversionUpdateMiddleware = async (req, res, next) => {
  const { id } = req.params;
  const { amount, earning } = req.body;

  // *  I look for the id in the database
  const findIdInversion = await inversion.findByPk(id);

  // * Check if it does not exist and send the error
  if (!findIdInversion) {
    // ! Error if not exist
    res.status(404).json({ error: 'Inversion not found!' });
    return;
  }
  if (typeof amount === 'undefined') {
    res.status(400).json({ error: 'Parameter amount is not defined' });
    return;
  }
  if (typeof earning === 'undefined') {
    res.status(400).json({ error: 'Parameter EARNING is not defined' });
    return;
  }

  if (amount <= 0 || earning <= 0) {
    res.status(400).json({ error: 'amount and Earning must be greater than 0' });
    return;
  }

  next();
};

module.exports = inversionUpdateMiddleware;
