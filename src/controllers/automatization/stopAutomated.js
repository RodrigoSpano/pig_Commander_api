const cron = require('node-cron');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const stopAutomatize = async (req, res) => {
  try {
    const { id } = getTokenPayload(req.headers['authorization']);
    cron.getTasks().forEach(j => (j.options.jobName === req.params.jobName && j.options.user_id === id) && j.stop());
    return res.status(202).json({ success: true, message: `${req.params.jobName} is no longer automatized!` });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = stopAutomatize;