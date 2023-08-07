const { Router } = require('express');
const postProfilePic = require('../../controllers/profile/postProfilePic');
// const getProfilePic = require('../../controllers/profile/getProfilePic');
// const deleteProfilePic = require('../../controllers/profile/deleteProfilePic');
// const editProfilePic = require('../../controllers/profile/editProfilePic');

const router = Router();

router.post('/', postProfilePic);
// router.get('/', getProfilePic);
// router.delete('/', deleteProfilePic);
// router.put('/', editProfilePic);

module.exports = router;
