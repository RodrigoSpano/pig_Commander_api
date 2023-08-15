const inversionPostMiddleware = async (req, res, next) => {
  const { amount, earning, started_on, finish_at, name } = req.body;

  if (typeof name === 'undefined') {
    res.status(400).json({ error: 'Parameter NAME is not defined' });
    return;
  }
  if (typeof earning === 'undefined') {
    res.status(400).json({ error: 'Parameter EARNINGS is not defined' });
    return;
  }
  if (typeof amount === 'undefined') {
    res.status(400).json({ error: 'Parameter AMOUNT is not defined' });
    return;
  }
  if (typeof started_on === 'undefined') {
    res.status(400).json({ error: 'Parameter STARTED_ON is not defined' });
    return;
  }
  if (typeof finish_at === 'undefined') {
    res.status(400).json({ error: 'Parameter FINISH_AT is not defined' });
    return;
  }

  if (amount <= 0 || earning <= 0) {
    res.status(400).json({ error: 'amount and Earnings must be greater than 0' });
    return;
  }

  next();
};

module.exports = inversionPostMiddleware;
