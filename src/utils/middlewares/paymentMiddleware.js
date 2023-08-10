const { getTokenPayload } = require('../helpers/authHelpers');
const { payment } = require('../../db');

const paymentMiddleware = async (req, res, next) => {
  const { id } = getTokenPayload(req.headers['authorization']);
  const { mount } = req.params;
  const parsedAmount = Number(mount);

  const paymentSearch = await payment.findOne({
    where: { user_id: id },
  });

  //* Chequeo que los precios esten correctamente
  if (parsedAmount !== 5000 && parsedAmount !== 10000) {
    res.status(500).json({ error: 'The amount must be 10000 or 5000' });
    return;
  }

  if (paymentSearch !== null) {
    res.status(500).json({ error: 'The User is premium now' });
    return;
  }

  next();
};
module.exports = paymentMiddleware;
