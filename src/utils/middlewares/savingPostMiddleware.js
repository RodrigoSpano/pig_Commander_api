const { saving } = require('../../db');

const savingPostMiddleware = async (req, res, next) => {
  const { name, amount, goal } = req.body;

  if (typeof name === 'undefined') {
    res.status(400).json({ error: 'Parameter NAME is not defined' });
    return;
  }
  if (typeof amount === 'undefined') {
    res.status(400).json({ error: 'Parameter amount is not defined' });
    return;
  }
  if (typeof goal === 'undefined') {
    res.status(400).json({ error: 'Parameter GOAL is not defined' });
    return;
  }

  if (amount <= 0 || goal <= 0) {
    res.status(400).json({ error: 'amount and Goal must be greater than 0' });
    return;
  }
  // * I search if it already exists in the database
  const existingSaving = await saving.findOne({
    where: { name: name.toLowerCase() },
  });

  //* if it already exists, I send the error and if it does not exist, it is created
  if (existingSaving) {
    // ! Error if exist
    res.status(409).json({ error: 'This saving already exists!' });
    return;
  }

  next();
};

module.exports = savingPostMiddleware;
