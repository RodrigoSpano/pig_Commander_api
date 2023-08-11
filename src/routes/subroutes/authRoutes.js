const express = require('express');
const passport = require('passport');
const loginUser = require('../../controllers/auth/loginController');
const signupUser = require('../../controllers/auth/signupController');
const logoutUser = require('../../controllers/auth/logoutController');
const {
  userAlreadyExistsMiddleware,
} = require('../../utils/middlewares/authMiddleware');
const { createJwtToken } = require('../../utils/helpers/authHelpers');


const router = express.Router();

router.post('/login', loginUser);

router.post('/signup', userAlreadyExistsMiddleware, signupUser);

router.delete('/logout', logoutUser);

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: `${process.env.CLIENT_URI}/api/auth/login`,
  }), (req, res) => {
    const token = createJwtToken(req.user.id, req.user.email);

    return res.redirect(`${process.env.CLIENT_URI}/google/success/?token=${token}`);
  }
);

module.exports = router;
