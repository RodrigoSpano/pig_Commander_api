const { Router } = require('express');
const { postProfilePic } = require('../../controllers/profile/postProfilePic');
const upload = require('../../services/multer/multerConfig');
const {
  userExistsDeleteMiddleware,
} = require('../../utils/middlewares/authMiddleware');
const deleteUser = require('../../controllers/profile/deleteUserController');
const getUserData = require('../../controllers/profile/getProfileInfo');
const forgotPasswordSendEmail = require('../../controllers/profile/forgotPassword');
const updatePassword = require('../../controllers/profile/changePassword');
const updateUser = require('../../controllers/profile/updateUser');
const oldPasswordMiddleware = require('../../utils/middlewares/passwordMiddleware');

const router = Router();

router.delete('/', userExistsDeleteMiddleware, deleteUser);

router.get('/', getUserData);

router.get('/forgot-password/:email', forgotPasswordSendEmail);

router.put('/updatepassword', oldPasswordMiddleware, updatePassword);

router.put('/updateuser', updateUser);

router.post('/', upload.single('image'), postProfilePic);

module.exports = router;
