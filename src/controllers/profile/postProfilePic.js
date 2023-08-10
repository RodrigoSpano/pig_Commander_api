const fs = require('fs');
const cloudinary = require('../../services/cloudinary/cloudinaryConfig');
const { user } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const deleteFile = (filePath, delay) => {
  setTimeout(() => {
    fs.unlink(filePath, (error) => {
      if (error) {
        console.log('Error deleting file');
      } else {
        console.log('File deleted successfully');
      }
    });
  }, delay);
};

const postProfilePic = async (req, res) => {
  try {
    const { id } = getTokenPayload(req.headers['authorization']);
    const image = req.file.path;
    const uploadedFile = await cloudinary.uploader.upload(image, {
      upload_preset: 'profile_preset',
      allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'webp'],
    });
    await user.update({ image: uploadedFile.url }, { where: { id } });
    deleteFile(image, 10000);
    return res.status(200).json(uploadedFile.url);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { postProfilePic };
