const { categories } = require('../../db');

async function categoryExist(req, res, next) {
  const { idCategory } = req.params;
  const alreadyExist = await categories.findByPk(idCategory);

  if (!alreadyExist) {
    return res.status(404).json({ message: 'category not found' });
  }

  return next();
}

module.exports = {
  categoryExist,
};
