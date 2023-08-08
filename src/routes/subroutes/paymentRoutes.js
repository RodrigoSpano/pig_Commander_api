const { Router } = require('express');
const paymentMercadoPago = require('../../controllers/payment/paymentMercadoPago');
const receiveWebhook = require('../../controllers/payment/webHook');
const { isAuth } = require('../../utils/middlewares/authMiddleware');

const router = Router();

router.get('/', isAuth, paymentMercadoPago);
router.post('/webhook', receiveWebhook);
module.exports = router;
