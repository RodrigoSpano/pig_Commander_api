const { Router } = require('express');
const paymentMercadoPago = require('../../controllers/payment/paymentMercadoPago');
const receiveWebhook = require('../../controllers/payment/webHook');
const { isAuth } = require('../../utils/middlewares/authMiddleware');
const paymentMiddleware = require('../../utils/middlewares/paymentMiddleware');

const router = Router();

router.get('/:amount', isAuth, paymentMiddleware, paymentMercadoPago);
router.post('/webhook', receiveWebhook);
module.exports = router;
