const mercadopago = require('mercadopago');

const createPayment = async () => {
  mercadopago.configure({
    access_token: `${process.env.ACCESS_TOKEN}`,
  });

  const payment = await mercadopago.preferences.create({
    payer_email: 'test_user_46945293@testuser.com',
    items: [
      {
        title: 'Pig Commander',
        description: 'Premium',
        picture_url: 'http://www.myapp.com/myimage.jpg',
        category_id: 'pigPremium',
        quantity: 1,
        unit_price: 10000,
      },
    ],
    payer: {
      email: 'test_user_46945293@testuser.com',
    },
    back_urls: {
      failure: '/failure',
      pending: '/pending',
      success: '/success',
    },
    payment_methods: {
      installments: 12,
    },
    notification_url:
      'https://aadb-2802-8010-4949-f100-c5d3-e28a-8ffb-60bb.ngrok-free.app/api/subscription/webhook',
  });

  return payment;
};

module.exports = createPayment;
