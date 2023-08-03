const { saving } = require('../../db');

const savingUpdateMiddleware = async (req, res, next) => {
  const { mount, goal, id } = req.body;

  // *  I look for the id in the database
  const findIdSaving = await saving.findByPk(id);

  // * Check if it does not exist and send the error
  if (!findIdSaving) {
    // ! Error if not exist
    res.status(404).json({ error: 'Saving not found!' });
    return;
  }
  if (typeof mount === 'undefined') {
    res.status(400).json({ error: 'Parameter MOUNT is not defined' });
    return;
  }
  if (typeof goal === 'undefined') {
    res.status(400).json({ error: 'Parameter GOAL is not defined' });
    return;
  }

  if (mount <= 0 || goal <= 0) {
    res.status(400).json({ error: 'Mount and Goal must be greater than 0' });
    return;
  }

  next();
};

module.exports = savingUpdateMiddleware;