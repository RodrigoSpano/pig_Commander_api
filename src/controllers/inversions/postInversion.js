const { inversion, user } = require('../../db');

const postInversion = async (req, res) => {
  try {
    // * I receive the property by body
    const { mount, earnings, started_on, finish_at } = req.body;

    // * Id of the user
    const { id } = req.user.dataValues;

    // * Check if the user exists before creating the inversion
    const userFind = await user.findByPk(id);
    if (!userFind) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // * Inversion are created
    const newInversion = await inversion.create({
      mount,
      earnings,
      started_on,
      finish_at,
      user_id: id,
    });

    // * Response that is sent if everything goes ok
    res.status(200).json(newInversion);
  } catch (error) {
    // ! Error internal server
    res.status(500).json({ error: error.message });
  }
};

module.exports = postInversion;
