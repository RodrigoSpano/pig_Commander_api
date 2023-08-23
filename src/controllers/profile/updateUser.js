const { user } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const updateUser = async (req, res) => {
  try {
    const { id } = getTokenPayload(req.headers['authorization']);
    const { name, lastname } = req.query;
    const updatedFields = {};
    if (name) {
      updatedFields.name = name;
    }
    if (lastname) {
      updatedFields.lastname = lastname;
    }
    if (Object.keys(updatedFields).length === 0) {
      return res.status(400).json({ error: 'Missing Fields' });
    }
    await user.update(updatedFields, {
      where: {
        id,
      },
    });
    const updatedUser = await user.findOne({ where: { id } });
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = updateUser;
