const inversionPostMiddleware = async (req, res, next) => {
  const { mount, earnings, started_on, finish_at } = req.body;

  if (typeof earnings === 'undefined') {
    res.status(400).json({ error: 'Parameter EARNINGS is not defined' });
    return;
  }
  if (typeof mount === 'undefined') {
    res.status(400).json({ error: 'Parameter MOUNT is not defined' });
    return;
  }
  if (typeof started_on === 'undefined') {
    res.status(400).json({ error: 'Parameter STARTED_ON is not defined' });
    return;
  }
  if (typeof finish_at === 'undefined') {
    res.status(400).json({ error: 'Parameter FINISH_AT is not defined' });
    return;
  }

  if (mount <= 0 || earnings <= 0) {
    res.status(400).json({ error: 'Mount and Earnings must be greater than 0' });
    return;
  }

  next();
};

module.exports = inversionPostMiddleware;
