const { categories } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id: user_id } = getTokenPayload(req.headers['authorization']);

    const [newCategory] = await categories.findOrCreate({
      where: {
        name,
        user_id
      },
    });

    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createCategory;
