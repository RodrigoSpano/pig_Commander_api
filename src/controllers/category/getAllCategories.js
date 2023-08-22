const getCategoriesHandler = require('../../handlers/categories/defaultCategories');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const getAllCategories = async (req, res) => {
  try {
    const { id } = getTokenPayload(req.headers['authorization']);
    const allCategories = await getCategoriesHandler(id);
    if (!allCategories.length) {
      return res.status(404).json({ error: 'categories not found' });
    }
    return res.status(200).json(allCategories);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getAllCategories;
