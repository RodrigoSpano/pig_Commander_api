const { maxSpend } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const updateMaxSpend = async (req, res) => {
  try {
    const user_id = getTokenPayload(req.headers['authorization']);
    const { mount } = req.body;
    await maxSpend.update({ mount, }, {
      where: { user_id },
    }
    );
    const updatedMaxSpend = await maxSpend.findOne({ where: { user_id } });
    return res.status(200).json(updatedMaxSpend);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateMaxSpend;
