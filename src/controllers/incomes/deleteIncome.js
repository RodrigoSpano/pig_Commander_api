const { incomes } = require('../../db');

const deleteIncome = async (req, res) => {
  try {
    const {idIncome} = req.params;

    
    const income = await incomes.findByPk(idIncome);
    if (!income) {
      return res.status(404).json({ message: 'El ingreso no fue encontrado' });
    }

    await income.destroy();

    return res.status(204).send('No content'); // 204 significa "No Content"
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteIncome

