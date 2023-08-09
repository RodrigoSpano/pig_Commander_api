const cloudinary = require('../../services/cloudinary/cloudinaryConfig');

const postProfilePic = async (req, res) => {
  try {
    const { image } = req.body;
    if (!image) {
      return res.status(400).json({ error: 'Missing file' });
    }
    const uploadedFile = await cloudinary.uploader.upload(image, {
      folder: 'profile-pics',
    });

    return res.status(200).json(uploadedFile);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postProfilePic;
