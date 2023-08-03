const { categories } = require('../../db');

const getCategoriesHandler = async () => {
  try {
    const allcategories = await categories.findAll();

    return allcategories;
  } catch (error) {
    throw Error(error);
  }
};

/* Falta descomentar lineas 18-20 para cuando esten todas las tablas andando */

module.exports = getCategoriesHandler;
