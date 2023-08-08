const createPayment = require('../../handlers/payment/paymentHandler');

const paymentMercadoPago = async (req, res) => {
  try {
    const subscriptionData = await createPayment();
    const subscription = {
      id: subscriptionData.body.id,
      user_id: subscriptionData.body.collector_id,
      link: subscriptionData.body.init_point,
      items: subscriptionData.body.items,
      date_created: subscriptionData.body.date_created,
    };
    res.status(200).json(subscription);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = paymentMercadoPago;
