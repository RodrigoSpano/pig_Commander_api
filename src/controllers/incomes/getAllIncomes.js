const { incomes } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');
// * De un usuario, todos los ingresos de todos los meses
const getAllIncomes = async (req, res) => {
  try {
    const { id: user_id } = getTokenPayload(req.headers['authorization']);
    const allIncomes = await incomes.findAll({ where: { user_id } });
    return res.status(200).json(allIncomes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllIncomes;
