const { Router } = require('express');

const forgotPasswordSendEmail = require('../../controllers/profile/forgotPassword');
const recoveryChangePassword = require('../../controllers/profile/recoveryChangePass');


const router = Router();

router.put('/password/:id', recoveryChangePassword);
router.get('/forgot-password/:email', forgotPasswordSendEmail);

module.exports = router;
