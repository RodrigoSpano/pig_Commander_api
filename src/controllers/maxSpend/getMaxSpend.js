const { maxSpend } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const getMaxSpend = async (req, res) => {
  try {
    const user_id = getTokenPayload(req.headers['authorization']);
    const allExepenses = await maxSpend.findAll({
      where: {
        user_id,
      },
    });
    res.status(200).json(allExepenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = getMaxSpend;
