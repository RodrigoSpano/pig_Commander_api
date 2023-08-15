const express = require('express');
const authRoutes = require('./subroutes/authRoutes');
const methodRoutes = require('./subroutes/methodRoutes');
const categoryRoute = require('./subroutes/categoryRoute');
const { isAuth } = require('../utils/middlewares/authMiddleware');
const expensesRoute = require('./subroutes/expensesRoute');
const incomesRoute = require('./subroutes/incomesRoute');
const savingsRoutes = require('./subroutes/savingsRoutes');
const inversionsRoutes = require('./subroutes/inversionsRoutes');
const maxSpendRoutes = require('./subroutes/maxSpendRoutes');
const profileRoutes = require('./subroutes/profileRoutes');
const subscriptionMercadoPago = require('./subroutes/paymentRoutes');
const newsRoutes = require('./subroutes/newsRoutes');
const automatizeRoutes = require('./subroutes/automatizeRoute');
const reviewsRoutes = require('./subroutes/reviewsRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/savings', isAuth, savingsRoutes);
router.use('/expenses', isAuth, expensesRoute);
router.use('/methods', isAuth, methodRoutes);
router.use('/incomes', isAuth, incomesRoute);
router.use('/category', isAuth, categoryRoute);
router.use('/inversions', isAuth, inversionsRoutes);
router.use('/maxSpend', isAuth, maxSpendRoutes);
router.use('/profile', isAuth, profileRoutes);
router.use('/subscription', subscriptionMercadoPago);
router.use('/news', isAuth, newsRoutes);
router.use('/auto', isAuth, automatizeRoutes);
router.use('/reviews', isAuth, reviewsRoutes);

module.exports = router;
