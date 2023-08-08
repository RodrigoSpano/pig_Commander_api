const mercadopago = require('mercadopago');
const { payment } = require('../../db');


const receiveWebhook = async (req, res) => {
  const paymentBody = req.body;

  try {
    if (paymentBody.type === 'payment') {
      const data = await mercadopago.payment.findById(paymentBody.data.id);

      await payment.create({
        date_created: data.body.date_created,
        date_approved: data.body.date_approved,
        amount: data.body.transaction_details.total_paid_amount,
        user_id: '12d11d1d1dd1',
      });

      res.status(200);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = receiveWebhook;
