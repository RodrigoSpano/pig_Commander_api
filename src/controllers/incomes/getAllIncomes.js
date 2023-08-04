const { incomes } = require('../../db');
// * De un usuario, todos los ingresos de todos los meses
const getAllIncomes = async (req, res) => {
  try {
    const { id } = req.user.dataValues;
    const allIncomes = await incomes.findAll({ where: { user_id: id } });

    if (allIncomes.length == 0) throw Error('Incomes not found..');

    return res.status(200).json(allIncomes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllIncomes;
