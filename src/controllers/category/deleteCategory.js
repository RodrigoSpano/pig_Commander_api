const { categories } = require('../../db');

const deleteCategory = async (req, res) => {
  try {
    const { idCategory } = req.params;

    await categories.destroy({
      where: {
        id: idCategory,
      },
    });

    return res.status(200).json({ deleted: 'category deleted' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteCategory;
