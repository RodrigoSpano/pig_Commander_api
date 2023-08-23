const { Router } = require('express');
const { postProfilePic } = require('../../controllers/profile/postProfilePic');
const upload = require('../../services/multer/multerConfig');
const {
  userExistsDeleteMiddleware,
} = require('../../utils/middlewares/authMiddleware');
const deleteUser = require('../../controllers/profile/deleteUserController');
const getUserData = require('../../controllers/profile/getProfileInfo');
const forgotPasswordSendEmail = require('../../controllers/profile/forgotPassword');

const router = Router();

router.delete('/:id', userExistsDeleteMiddleware, deleteUser);

router.get('/', getUserData);

router.get('/forgot-password/:email', forgotPasswordSendEmail);

router.put('/update-password/:id');

router.post('/', upload.single('image'), postProfilePic);

module.exports = router;
