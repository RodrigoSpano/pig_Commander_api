const cron = require('node-cron');
const { payment, user } = require('../../db');

const removePremium = async (date, idUser) => {
  const dateOfPayment = new Date(date);

  //* Busco el pago del usuario
  const paymentSearch = await payment.findOne({
    where: { user_id: idUser },
  });

  // * Checkeo si es premium o no
  const checkUserPremium = await user.findOne({
    where: { id: idUser, premium: false },
  });

  // * Formateo los dias y meses para tenerlas
  const day = dateOfPayment.getDate();
  let month = dateOfPayment.getMonth() + 1;

  if (paymentSearch.amount === 10000) {
    month += 6;
  }

  // * Chequeo si la subscripcion se vence en el año que le sigue, y hago el calculo para resetear el mes
  if (month >= 12) {
    let count = 0;
    while (month !== 12) {
      month -= 1;
      count += 1;
    }
    month = count;
  }

  // * Si el Usuario tiene premium
  if (checkUserPremium === null) {
    // * Tarea programada para que elimine despues de los meses que haya pagado el premium
    const task = cron.schedule(
      `* * ${day} ${month} *`,
      async () => {
        // * Si se encontro el pago updatea el premium a false y elimina el pago correspondiente, porque ya vencio su premium
        if (paymentSearch !== null) {
          await user.update(
            { premium: false },
            { where: { id: idUser, premium: true } }
          );
          await payment.destroy({
            where: {
              user_id: idUser,
            },
          });

          // ! EL STOP HACE QUE LA TAREA NO SE VUELVA A EJECUTAR, SOLO SE EJECUTA EN LA FECHA Y LISTO
          task.stop();
        }
      },
      {
        scheduled: true,
        timezone: 'America/Sao_Paulo',
      }
    );
  }
};

module.exports = removePremium;
