const { incomes } = require('../../db');

const getAutomatizedIncomes = async (req, res) => {
  try {
    const { id } = req.user.dataValues;

    // * Buscar Ingreso según si está automatizado o no
    const allIncomes = await incomes.findAll({
      where: { user_id: id, automatized: true },
    });

    if (allIncomes.length === 0) throw Error('Incomes not found..');

    return res.status(200).json(allIncomes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAutomatizedIncomes;
