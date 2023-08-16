const cron = require('node-cron');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const getAllAutomatedTransactions = async (req, res) => {
  try {
    const { id } = getTokenPayload(req.headers['authorization']);
    const userAutomatedArr = [];
    cron.getTasks().forEach(j => {
      if (j.options.user_id === id && j['_scheduler'].timeout !== null) userAutomatedArr.push(j.options.jobName);
    });
    return res.status(202).json({ success: true, automated: userAutomatedArr });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllAutomatedTransactions;