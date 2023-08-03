const { categories } = require('../../db');

const getCategoriesHandler = async () => {
  try {
    /* const allcategories = await categories.findAll(
            where: {user_id: user_id}
        ); */
    const allcategories = await categories.findAll();

    return allcategories;
  } catch (error) {
    throw Error('categoriesHandler:', error);
    // esto despues lo saco pero es para ver de donde viene error
  }
};

/* Falta descomentar lineas 18-20 para cuando esten todas las tablas andando */

module.exports = getCategoriesHandler;
