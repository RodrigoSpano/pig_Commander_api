const express = require('express');
const passport = require('passport');
const loginUser = require('../../controllers/auth/loginController');
const signupUser = require('../../controllers/auth/signupController');
const logoutUser = require('../../controllers/auth/logoutController');
const {
  userAlreadyExistsMiddleware,
} = require('../../utils/middlewares/authMiddleware');
const { createJwtToken } = require('../../utils/helpers/authHelpers');
const { isBannedMiddleware } = require('../../utils/middlewares/userMiddleware');


const router = express.Router();

router.post('/login', isBannedMiddleware, loginUser);

router.post('/signup', isBannedMiddleware, userAlreadyExistsMiddleware, signupUser);

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
    failureRedirect: `${process.env.CLIENT_URI}/login`,
  }), (req, res) => {
    const token = createJwtToken(req.user.id, req.user.email);

    return res.redirect(`${process.env.CLIENT_URI}/services/success/?token=${token}`);
  }
);

// github
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/github/callback', passport.authenticate('github', {
  failureRedirect: `${process.env.CLIENT_URI}/login`
}),
  (req, res) => {
    const token = createJwtToken(req.user.id, req.user.email);
    return res.redirect(`${process.env.CLIENT_URI}/services/success/?token=${token}`);
  });

module.exports = router;
