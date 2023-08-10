const { getTokenPayload } = require('../helpers/authHelpers');
const { payment } = require('../../db');

const paymentMiddleware = async (req, res, next) => {
  const { id } = getTokenPayload(req.headers['authorization']);
  const { amount } = req.params;
  const parsedAamount = Number(amount);

  const paymentSearch = await payment.findOne({
    where: { user_id: id },
  });

  //* Chequeo que los precios esten correctamente
  if (parsedAamount !== 5000 && parsedAamount !== 10000) {
    res.status(500).json({ error: 'The aamount must be 10000 or 5000' });
    return;
  }

  if (paymentSearch !== null) {
    res.status(500).json({ error: 'The User is premium now' });
    return;
  }

  next();
};
module.exports = paymentMiddleware;
