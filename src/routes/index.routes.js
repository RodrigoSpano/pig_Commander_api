const express = require('express');
const authRoutes = require('./subroutes/authRoutes');
const methodRoutes = require('./subroutes/methodRoutes');
const { isAuth } = require('../utils/middlewares/authMiddleware');
// const expensesRoute = require('./subroutes/auth');
const savingsRoutes = require('./subroutes/savingsRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/methods', isAuth, methodRoutes);
router.use('/savings', isAuth, savingsRoutes);

module.exports = router;
