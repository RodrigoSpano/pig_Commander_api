const createPayment = require('../../handlers/payment/paymentHandler');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');
const { sendSubscribeNotification } = require('../../utils/helpers/sendMailHelper');

const paymentMercadoPago = async (req, res) => {
  const { id } = getTokenPayload(req.headers['authorization']);
  const { amount } = req.params;

  try {
    const subscriptionData = await createPayment(amount, id);
    const subscription = {
      id: subscriptionData.body.id,
      user_id: subscriptionData.body.collector_id,
      link: subscriptionData.body.init_point,
      items: subscriptionData.body.items,
      date_created: subscriptionData.body.date_created,
    };
    sendSubscribeNotification(id);
    res.status(200).json(subscription);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = paymentMercadoPago;
