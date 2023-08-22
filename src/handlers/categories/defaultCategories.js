const { categories } = require('../../db');

const defaultsCat = [
  { name: 'entertainment' },
  { name: 'health' },
  { name: 'education' },
  { name: 'transport' },
  { name: 'food' },
];

const getCategoriesHandler = async (user_id) => {
  const getAll = await categories.findAll({ where: { user_id } });

  if (!getAll.length) {
    const userDefaultCategories = defaultsCat.map(el => ({ ...el, user_id }));
    await categories.bulkCreate(userDefaultCategories);
  }
  const allCategoriesUpdated = await categories.findAll({ where: { user_id } });
  return allCategoriesUpdated;
};

module.exports = getCategoriesHandler;
