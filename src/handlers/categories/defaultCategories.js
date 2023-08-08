const { categories } = require('../../db');

const defaultsCat = [{ name: 'entertainment' }, { name: 'health' }, { name: 'education' }, { name: 'transport' }, { name: 'food' }];

const getCategoriesHandler = async () => {
  const getAll = await categories.findAll();

  if (!getAll.length) {
    await categories.bulkCreate(defaultsCat);
  }

  const allCategoriesUpdated = await categories.findAll();
  return allCategoriesUpdated;
};

module.exports = getCategoriesHandler;