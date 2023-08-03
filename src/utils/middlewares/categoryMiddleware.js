const { categories } = require('../../db');

async function categoryExist(req, res, next) {
  const { idCategory } = req.params;
  const alreadyExist = await categories.findByPk(idCategory);

  if (!alreadyExist) {
    return res.status(404).json({ message: 'category not found' });
  }

  return next();
}

async function postCategoriesMiddleware (req, res, next){
  const { name } =
    req.body;
  if (!name) {
    return res.status(400).json({ message: 'category name is required' });
  }
  
  return next();
};


module.exports = {
  categoryExist,
  postCategoriesMiddleware
};
