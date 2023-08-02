const express = require('express');
const authRoutes = require('./subroutes/auth');
// const expensesRoute = require('./subroutes/auth');

const router = express.Router();

router.use('/auth', authRoutes);
// router.use('/expenses', expensesRoute);


module.exports = router;