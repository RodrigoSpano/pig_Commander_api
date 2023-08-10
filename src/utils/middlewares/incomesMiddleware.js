const { incomes } = require('../../db');

async function incomeExist(req, res, next) {
  const { idIncome } = req.params;
  if (req.body.amount <= 1) return res.status(400).json({ message: 'amount should not be less than $1' });

  const incomeAlreadyExist = await incomes.findByPk(idIncome);

  if (!incomeAlreadyExist) {
    return res.status(404).json({ message: 'Income not found' });
  }

  return next();
}



module.exports = {
  incomeExist,
};
