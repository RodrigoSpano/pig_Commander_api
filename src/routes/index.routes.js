const express = require('express');
const authRoutes = require('./subroutes/authRoutes');
const methodRoutes = require('./subroutes/methodRoutes');
const { isAuth } = require('../utils/middlewares/authMiddleware');
// const expensesRoute = require('./subroutes/auth');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/methods', isAuth, methodRoutes);


module.exports = router;