const mercadopago = require('mercadopago');

const createPayment = async (amount, idUser) => {
  mercadopago.configure({
    access_token: `${process.env.ACCESS_TOKEN}`,
  });

  const payment = await mercadopago.preferences.create({
    items: [
      {
        title: 'Pig Commander',
        description: 'Premium',
        picture_url: 'http://www.myapp.com/myimage.jpg',
        category_id: 'pigPremium',
        quantity: 1,
        unit_price: Number(amount),
        id: `${idUser}`,
      },
    ],
    back_urls: {
      failure: '/failure',
      pending: '/pending',
      success: '/success',
    },
    payment_methods: {
      installments: 12,
    },
    notification_url:
      'https://7186-186-130-95-20.ngrok-free.app/api/subscription/webhook',
  });

  return payment;
};

module.exports = createPayment;
