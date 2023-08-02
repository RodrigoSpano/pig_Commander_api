const express = require('express');
const authRoutes = require('./subroutes/auth');
const methodRoutes = require('./subroutes/methodRoutes');
const savingsRoutes = require('./subroutes/savingsRoutes');
// const expensesRoute = require('./subroutes/auth');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/methods', methodRoutes);
router.use('/savings', savingsRoutes);

module.exports = router;