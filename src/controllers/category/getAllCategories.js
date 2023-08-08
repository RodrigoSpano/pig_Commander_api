const getCategoriesHandler = require('../../handlers/categories/defaultCategories');

const getAllCategories = async (req, res) => {
  try {
    const allCategories = await getCategoriesHandler();
    if (!allCategories.length) {
      return res.status(404).json({ error: 'categories not found' });
    }
    return res.status(200).json(allCategories);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getAllCategories;
