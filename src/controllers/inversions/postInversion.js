const { inversion, user } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const postInversion = async (req, res) => {
  try {
    // * I receive the property by body
    const { amount, earning, started_on, finish_at, name } = req.body;

    // * Id of the user
    const { id: user_id } = getTokenPayload(req.headers['authorization']);

    // * Check if the user exists before creating the inversion
    const userFind = await user.findByPk(user_id);
    if (!userFind) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // * Inversion are created
    const newInversion = await inversion.create({
      name,
      amount,
      earning,
      started_on,
      finish_at,
      user_id,
    });

    // * Response that is sent if everything goes ok
    res.status(200).json(newInversion);
  } catch (error) {
    // ! Error internal server
    res.status(500).json({ error: error.message });
  }
};

module.exports = postInversion;
