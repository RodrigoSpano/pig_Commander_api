const express = require('express');
const passport = require('passport');
const loginUser = require('../../controllers/auth/loginController');
const signupUser = require('../../controllers/auth/signupController');
const logoutUser = require('../../controllers/auth/logoutController');
const deleteUser = require('../../controllers/auth/deleteUserController');
const {
  userExistsDeleteMiddleware,
  userAlreadyExistsMiddleware,
} = require('../../utils/middlewares/authMiddleware');

const router = express.Router();

router.post('/login', loginUser);

router.post('/signup', userAlreadyExistsMiddleware, signupUser);

router.delete('/logout', logoutUser);

router.delete('/user/:id', userExistsDeleteMiddleware, deleteUser);

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:8080/api/google/success',
    failureRedirect: 'http://localhost:8080/api/auth/login',
  })
);

module.exports = router;
