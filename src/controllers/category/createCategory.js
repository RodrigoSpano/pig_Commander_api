const { categories } = require('../../db');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) throw Error('Missing data..');
    const [newCategory] = await categories.findOrCreate({
      where: {
        name,
      },
    });

    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createCategory;
