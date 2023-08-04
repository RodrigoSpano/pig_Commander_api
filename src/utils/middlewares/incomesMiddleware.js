const { incomes } = require('../../db');

async function incomeExist(req, res, next) {
  const { idIncome } = req.params;
  const incomeAlreadyExist = await incomes.findByPk(idIncome);

  if (!incomeAlreadyExist) {
    return res.status(404).json({ message: 'Income not found' });
  }

  return next();
}

async function mountValidate(req, res, next) {
  const { mount } = req.body;

  if (mount < 1 || !mount) {
    return res.status(400).json({ message: 'mount cannot be less than 1' });
  }

  return next();
}

async function getIncomesMiddleware(req, res, next) {
  const { id } = req.user.dataValues;

  if (!id) return res.status(400).json({ error: 'User not logged in' });

  return next();
}

module.exports = {
  incomeExist,
  mountValidate,
  getIncomesMiddleware,
};
