const { categories } = require('../../db');

const getAllCategories = async (req, res) => {
  try {
    const allCategories = await categories.findAll();

    return res.status(200).json(allCategories);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getAllCategories;
