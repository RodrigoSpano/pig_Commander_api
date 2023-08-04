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
    return res.status(400).json({ error: error.message });
  }
};

/* 
9- [newCategory] : Here, I am staying with the first element of the array that
returns .findOrCreate() , and I assign it to the variable 'newCategory'.
*/
module.exports = createCategory;
