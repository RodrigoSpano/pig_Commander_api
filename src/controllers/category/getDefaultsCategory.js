const { categories } = require('../../db');


const getDefaultCategories = async (req, res) => {
  try {
    const defaultsCat = [{ name: 'entertainment' }, { name: 'health' }, { name: 'education' }, { name: 'transport' }, { name: 'food' }];
    const getAll = await categories.findAll();
    const defaultsExists = defaultsCat.map(el => getAll.some(c => c.name === el.name));
    if (!defaultsExists[0]) {
      await categories.bulkCreate(defaultsCat);
      return res.status(201).json({ message: 'defaults categories added' });
    }
    return res.status(302).json({ message: 'that categories already exists' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getDefaultCategories;