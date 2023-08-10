const { saving, user } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const postSaving = async (req, res) => {
  try {
    // * I receive the property by body
    const { name, amount, goal } = req.body;

    // * Id of the user
    const { id: user_id } = getTokenPayload(req.headers['authorization']);

    // * Check if the user exists before creating the saving
    const userFind = await user.findByPk(user_id);
    if (!userFind) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // * Saving are created
    const newSaving = await saving.create({
      name: name.toLowerCase(),
      amount,
      goal,
      user_id,
    });

    // * Response that is sent if everything goes ok
    res.status(200).json(newSaving);
  } catch (error) {
    // ! Error internal server
    res.status(500).json({ error: error.message });
  }
};

module.exports = postSaving;
