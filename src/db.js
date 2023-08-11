const { Sequelize } = require('sequelize');
const UserModel = require('./model/UserModel');
const MethodModel = require('./model/MethodModel');
const CategoriesModel = require('./model/CategoriesModel');
const IncomesModel = require('./model/IncomesModel');
const InversionModel = require('./model/InversionModel');
const ExpensesModel = require('./model/ExpensesModel');
const MaxSpendModel = require('./model/MaxspendModel');
const SavingModel = require('./model/SavingModel');
const PaymentsModel = require('./model/paymentsModel');

const sequelize = new Sequelize(process.env.DB_HOST,
  {
    logging: false,
    native: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

UserModel(sequelize);
MethodModel(sequelize);
CategoriesModel(sequelize);
IncomesModel(sequelize);
InversionModel(sequelize);
ExpensesModel(sequelize);
MaxSpendModel(sequelize);
SavingModel(sequelize);
PaymentsModel(sequelize);

const {
  user,
  maxSpend,
  method,
  categories,
  incomes,
  inversion,
  expenses,
  saving,
  payment,
} = sequelize.models;

// relation user to Payment
user.hasOne(payment, { foreignKey: 'user_id' });
payment.belongsTo(user, { foreignKey: 'user_id' });

// relation user to maxSpend
user.hasOne(maxSpend, { foreignKey: 'user_id' });
maxSpend.belongsTo(user, { foreignKey: 'user_id' });

// relation user to inversions
user.hasMany(inversion, { foreignKey: 'user_id' });
inversion.belongsTo(user, { foreignKey: 'user_id' });

// relation user to savings/goals
user.hasMany(saving, { foreignKey: 'user_id' });
saving.belongsTo(user, { foreignKey: 'user_id' });

// relation user to incomes
user.hasMany(incomes, { foreignKey: 'user_id' });
incomes.belongsTo(user, { foreignKey: 'user_id' });

// relation category to incomes
categories.hasMany(incomes, {
  foreignKey: 'category_id',
});
incomes.belongsTo(categories, { foreignKey: 'category_id' });

// relation method to incomes
method.hasMany(incomes, { foreignKey: 'method_id' });
incomes.belongsTo(method, { foreignKey: 'method_id' });

// relation user to expenses
user.hasMany(expenses, { foreignKey: 'user_id' });
expenses.belongsTo(user, { foreignKey: 'user_id' });

// relation expenses to category
categories.hasMany(expenses, {
  foreignKey: 'category_id',
});
expenses.belongsTo(categories, { foreignKey: 'category_id' });

// relation methods to expenses
method.hasMany(expenses, {
  foreignKey: 'method_id',
});
expenses.belongsTo(method, { foreignKey: 'method_id' });

module.exports = { conn: sequelize, ...sequelize.models };
