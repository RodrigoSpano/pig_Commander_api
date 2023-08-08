const axios = require('axios');

const createSubscription = async () => {
  const url = 'https://api.mercadopago.com/preapproval';

  const body = {
    reason: 'PigCommander Premium',
    auto_recurring: {
      frequency: 1,
      frequency_type: 'months',
      transaction_amount: 250,
      currency_id: 'ARS',
    },
    back_url: 'https://google.com.ar',
    payer_email: 'test_user_565691737@testuser.com',
    notification_url:
      'https://a9ed-186-130-95-20.ngrok-free.app/api/subscription/webhook',
  };

  const subscription = await axios.post(url, body, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  });

  return subscription.data;
};

module.exports = createSubscription;
