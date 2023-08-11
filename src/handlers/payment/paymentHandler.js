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
      failure: `${process.env.CLIENT_URI}/home/dashboard`,
      pending: `${process.env.CLIENT_URI}/home/dashboard`,
      success: `${process.env.CLIENT_URI}/home/dashboard`,
    },
    payment_methods: {
      installments: 12,
    },
    notification_url:
      'https://ee65-186-137-12-227.ngrok-free.app/api/subscription/webhook',
  });

  return payment;
};

module.exports = createPayment;
