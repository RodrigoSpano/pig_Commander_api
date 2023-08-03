const express = require('express');
const authRoutes = require('./subroutes/authRoutes');
const methodRoutes = require('./subroutes/methodRoutes');
const categoryRoute = require('./subroutes/categoryRoute')
const { isAuth } = require('../utils/middlewares/authMiddleware');
// const expensesRoute = require('./subroutes/auth');
const incomesRoute = require('./subroutes/incomesRoute')

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/methods', isAuth, methodRoutes);
router.use('/incomes',isAuth, incomesRoute)
router.use('/category',isAuth, categoryRoute)

module.exports = router;