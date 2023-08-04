const { inversion } = require('../../db');

// * Middleware that checks that there is a saving with that id
const inversionDeleteMiddleware = async (req, res, next) => {
// *  I receive the id by params
  const { id } = req.params;

// *  I look for the id in the database
  const findIdInversion = await inversion.findByPk(id);

// * Check if it does not exist and send the error
  if (!findIdInversion) {
// ! Error if not exist
    return res.status(404).json({ error: 'Inversion not found!' });
  }

  return next();
};

module.exports = inversionDeleteMiddleware;
