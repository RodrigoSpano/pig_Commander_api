const getCategoriesHandler = require('../../handlers/category/getCategoriesHandler');

const getAllCategories = async (req, res) => {
  try {
    const allCategories = await getCategoriesHandler();

    return res.status(200).json(allCategories);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = getAllCategories;
