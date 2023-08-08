const cloudinary = require('../../services/cloudinary/cloudinaryConfig');
const { user } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const postProfilePic = async (req, res) => {
  try {
    const { id: user_id } = getTokenPayload(req.headers['authorization']);

    const { image } = req.body;
    if (!image) return res.status(400).json({ error: 'Missing file' });

    const uploadedFile = await cloudinary.uploader.upload(image, {
      folder: 'profile-pics',
    });
    await user.update({ image }, { where: user_id });
    return res.status(200).json(uploadedFile);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postProfilePic;
