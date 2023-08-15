const cron = require('node-cron');
const { getTokenPayload } = require('../helpers/authHelpers');

const automatedExistsMiddleware = async (req, res, next) => {
  const { id } = getTokenPayload(req.headers['authorization']);
  let findJob = false;
  cron.getTasks().forEach(j => {
    if (j.options.user_id === id && j.options.jobName === req.body.name) findJob = true;
  });
  if (findJob) return res.status(302).json({ message: 'automatize transaction with that name already exist' });
  return next();
};

module.exports = automatedExistsMiddleware;