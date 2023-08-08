const { inversion } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const getAllSavings = async (req, res) => {
  try {
    // * Id of the user
    const { id: user_id } = getTokenPayload(req.headers['authorization']);

    // * I look up all the inversions in the database
    const allInversions = await inversion.findAll({
      where: {
        user_id,
      },
    });

    // * If there are no inversions I respond with a 404 error
    if (allInversions.length === 0) {
      // ! Error if not exist
      res.status(404).json({ error: 'Inversions not found!' });
    } else {
      // * Response if there are inversions
      res.status(200).json(allInversions);
    }
  } catch (error) {
    // ! Error internal server
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllSavings;
