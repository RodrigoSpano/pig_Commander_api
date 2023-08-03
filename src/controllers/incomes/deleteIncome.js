const { incomes } = require('../../db');

const deleteIncome = async (req, res) => {
  try {
    const { idIncome } = req.params;
    await incomes.destroy({
      where: {
        id: idIncome,
      },
    });

    return res.status(200).json({ deleted: 'Income deleted' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteIncome;

// linea 12 - eso es porque .destroy() devuelve la cantindad de filas que elimino 

