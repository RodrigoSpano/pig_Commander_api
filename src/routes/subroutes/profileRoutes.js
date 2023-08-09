const { Router } = require('express');
const postProfilePic = require('../../controllers/profile/postProfilePic');
const {
  userExistsDeleteMiddleware,
} = require('../../utils/middlewares/authMiddleware');
const deleteUser = require('../../controllers/profile/deleteUserController');
const getUserData = require('../../controllers/profile/getProfileInfo');
const deleteProfilePic = require('../../controllers/profile/deleteProfilePic');
const editProfilePic = require('../../controllers/profile/editProfilePic');

const router = Router();

router.delete('/:id', userExistsDeleteMiddleware, deleteUser);

router.get('/', getUserData);

router.post('/', postProfilePic);

router.delete('/', deleteProfilePic);

router.put('/', editProfilePic);

module.exports = router;
