const { incomes } = require('../../db');
// todos de todos los meses
const getAllIncomes = async (req, res) => {
  try {
    const { id } = req.user.dataValues;
    const allIncomes = await incomes.findAll({ where: { user_id: id } });

    return res.status(200).json(allIncomes);
  } catch (error) {
    return res.status(400).json({ error: error.message });
    // esto despues lo saco pero es para ver de donde viene error
  }
};

module.exports = getAllIncomes;
