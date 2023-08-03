const { incomes } = require('../../db');

const updateIncome = async (req, res) => {
  try {
    const {idIncome} = req.params;
    const {mount, automatized, auto_date} = req.body;

    // Verificar si el ingreso existe
    const incomeToUpdate = await incomes.findByPk(idIncome);
    if (!incomeToUpdate) {
      return res.status(404).json({ message: 'El ingreso no fue encontrado' });
    }

    // Actualizar el ingreso
    await incomeToUpdate.update({
      
      mount,
      automatized,
      auto_date
    });

    return res.status(200).json(incomeToUpdate); // Devolver el ingreso actualizado
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateIncome;
