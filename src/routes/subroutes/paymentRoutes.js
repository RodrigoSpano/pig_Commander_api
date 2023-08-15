const { Router } = require('express');
const paymentMercadoPago = require('../../controllers/payment/paymentMercadoPago');
const receiveWebhook = require('../../controllers/payment/webHook');
const { isAuth } = require('../../utils/middlewares/authMiddleware');
const paymentMiddleware = require('../../utils/middlewares/paymentMiddleware');
const refundPayment = require('../../controllers/payment/refundPayment');

const router = Router();

router.get('/createOrder/:amount', isAuth, paymentMiddleware, paymentMercadoPago);
router.post('/webhook', receiveWebhook);
router.get('/refund', refundPayment);

module.exports = router;
