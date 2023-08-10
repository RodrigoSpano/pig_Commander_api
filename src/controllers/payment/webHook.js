const mercadopago = require('mercadopago');
const { payment, user } = require('../../db');

const receiveWebhook = async (req, res) => {
  const paymentBody = req.body;

  try {
    //* Si se pudo pagar entre
    if (paymentBody.type === 'payment') {
      //* Busco la data del Payment en mercadopago
      const data = await mercadopago.payment.findById(paymentBody.data.id);
      const idUser = data.body.additional_info.items[0].id;

      if (data.body.status === 'approved' && idUser) {
        //*  Procedo a fijarse si encuentra en la base de datos un payment del mismo usuario
        const paymentSearch = await payment.findOne({
          where: { user_id: idUser },
        });

        //* Si no encuentra en BD un payment con el usuario y ademas la busqueda de user me encuentra uno entra
        if (paymentSearch === null) {
          //* Updateo al usuario y le otorgo el premium
          await user.update(
            { premium: true },
            { where: { id: idUser, premium: false } }
          );
          //* Creo en la BD un nuevo paymen con el id del usuario
          await payment.create({
            date_created: data.body.date_created,
            date_approved: data.body.date_approved,
            aamount: data.body.transaction_details.total_paid_aamount,
            user_id: idUser,
          });
        }

        res.status(200);
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = receiveWebhook;
