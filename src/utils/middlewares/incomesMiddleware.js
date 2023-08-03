const { incomes } = require('../../db');

async function incomeExist(req, res, next) {
  const { idIncome } = req.params;
  const incomeToUpdate = await incomes.findByPk(idIncome);

  if (!incomeToUpdate) {
    return res.status(404).json({ message: 'Income not found' });
  }

  return next();
}

module.exports = {
  incomeExist,
};
