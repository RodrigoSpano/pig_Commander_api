const { incomes } = require('../../db');

const updateIncome = async (req, res) => {
  try {
    const { id } = req.user.dataValues;
    const { mount, automatized, auto_date } = req.body;

    // Actualizar el ingreso
    await incomes.update(
      {
        mount,
        automatized,
        auto_date,
      },
      {
        where: { user_id: id },
      }
    );

    const incomeUpdated = await incomes.findByPk(idIncome);

    return res.status(200).json(incomeUpdated); // Devolver el ingreso actualizado
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateIncome;
