const { saving } = require('../../db');

// * Middleware that checks that there is a saving with that id
const savingMiddleware = async (req, res, next) => {
// *  I receive the id by params
  const { id } = req.params;

// *  I look for the id in the database
  const findIdSaving = await saving.findByPk(id);

// * Check if it does not exist and send the error
  if (!findIdSaving) {
// ! Error if not exist
    return res.status(404).json({ error: 'Saving not found!' });
  }

  return next();
};

module.exports = savingMiddleware;
