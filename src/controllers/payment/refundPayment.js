const axios = require('axios');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');
const { payment, user } = require('../../db');

const refundPayment = async (req, res) => {
  // * Agarro el id del usuario de la sesion
  const { id } = getTokenPayload(req.headers['authorization']);

  try {
    // * Busco el pago del premium que pertenece al usuario
    const paymentSearch = await payment.findOne({
      where: { user_id: id },
    });

    // * Si encuentro el pago hago el proceso de pedir el reembolso
    if (paymentSearch) {
      const accessToken = process.env.ACCESS_TOKEN;
      const url = `https://api.mercadopago.com/v1/payments/${paymentSearch.id}/refunds`;

      const response = await axios.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // * Si el reembolso es aprobado elimino el pago de la base de datos y desactivo el premium
      if (response.data.status === 'approved') {
        await user.update({ premium: false }, { where: { id, premium: true } });
        await payment.destroy({
          where: {
            user_id: id,
          },
        });
      }

      res.status(200).json(response.data);
    }
  } catch (error) {
    res.status(400).json({ error: error.response.data });
  }
};

module.exports = refundPayment;
