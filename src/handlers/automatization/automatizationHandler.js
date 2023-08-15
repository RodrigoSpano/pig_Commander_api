/* eslint-disable consistent-return */
const cron = require('node-cron');
const { expenses, incomes } = require('../../db');
const { sendExpensesAutoNotification, sendIncomesAutoNotification } = require('../../utils/helpers/sendMailHelper');

const createExpenseAutomatization = async (data, user_id) => {
  const expenseObj = {
    amount: data.amount,
    category_id: data.category_id,
    method_id: data.method_id,
    name: data.name,
    user_id
  };

  cron.schedule(`0 7 ${data.auto_date} * *`, async () => {
    await expenses.create(expenseObj);
  }, { jobName: data.name, user_id });
  await sendExpensesAutoNotification(user_id, data.amount, data.auto_date);
  return { automatized: true };

};

const createIncomeAutomatization = async (data, user_id) => {
  const incomeObj = {
    amount: data.amount,
    category_id: data.category_id,
    method_id: data.method_id,
    name: data.name,
    user_id
  };
  cron.schedule(`0 7 ${data.auto_date} * *`, async () => {
    await incomes.create(incomeObj);
  }, { jobName: data.name, user_id });
  await sendIncomesAutoNotification(user_id, data.amount, data.auto_date);
  return { automatized: true };
};

module.exports = { createExpenseAutomatization, createIncomeAutomatization };