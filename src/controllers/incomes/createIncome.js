/* eslint-disable no-unused-vars */
const { incomes } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');
const { sendIncomesNotification } = require('../../utils/helpers/sendMailHelper');

// esto crea un ingreso
const createIncome = async (req, res) => {
  try {
    const user_id = getTokenPayload(req.headers['authorization']);
    const { mount, automatized, auto_date, category_id, method_id, name } = req.body;

    if (!mount || mount < 1 || !category_id || !method_id || !name) {
      return res.status(404).json({ error: 'Missing data..' });
    }

    // Creacion o busqueda
    const newIncome = await incomes.create({
      user_id,
      name,
      mount,
      automatized: automatized && automatized,
      auto_date: automatized ? auto_date : null, // Establecer auto_date si automatized es true, de lo contrario, establecer en null
      category_id,
      method_id,
    });

    //xsendIncomesNotification(user_id,mount)
    return res.status(200).json(newIncome);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createIncome;

/* 
    En esta ruta, se reciben los valores necesarios para crear un 'income'.
    En especial, los valores 'method_id' y 'category_id' serviran para que se cree la relacion
     en la base de datos.
     Los valores user_id,category_id,method_id estan comentados porque necesitamos de las demas tablas
*/
