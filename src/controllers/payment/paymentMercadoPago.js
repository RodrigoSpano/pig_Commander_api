const createSubscription = require('../../handlers/payment/paymentHandler');

const paymentMercadoPago = async (req, res) => {
  try {
    const subscriptionData = await createSubscription();
    const subscription = {
      payer_id: subscriptionData.payer_id,
      reason: subscriptionData.reason,
      link: subscriptionData.init_point,
      info: subscriptionData.auto_recurring,
      date: subscriptionData.date_created,
      status: subscriptionData.status,
    };
    res.status(200).json(subscription);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = paymentMercadoPago;
