const { incomes } = require('../../db');

const updateIncome = async (req, res) => {
  try {
    const { idIncome } = req.params;

    // Actualizar el ingreso
    await incomes.update(req.body, {
      where: { id: idIncome },
    });

    const incomeUpdated = await incomes.findByPk(idIncome);

    return res.status(200).json(incomeUpdated); // Devolver el ingreso actualizado
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateIncome;
