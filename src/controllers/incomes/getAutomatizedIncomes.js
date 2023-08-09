const { incomes } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const getAutomatizedIncomes = async (req, res) => {
  try {
    const { id: user_id } = getTokenPayload(req.headers['authorization']);

    // * Buscar Ingreso según si está automatizado o no
    const allIncomes = await incomes.findAll({
      where: { user_id, automatized: true },
    });

    if (allIncomes.length === 0) throw Error('Incomes not found..');

    return res.status(200).json(allIncomes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAutomatizedIncomes;
