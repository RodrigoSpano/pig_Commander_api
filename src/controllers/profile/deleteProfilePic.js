const cloudinary = require('../../services/cloudinary/cloudinaryConfig');
const { user } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const deleteProfilePic = async (req, res) => {
  try {
    const { id: user_id } = getTokenPayload(req.headers['authorization']);

    const { image } = req.body;

    if (!image)
      return res.status(400).json({ error: 'No profile image to delete' });

    // Eliminar la foto de cloudinary
    await cloudinary.uploader.destroy(image);

    // Eliminar la foto del usuario dejandola en null
    await user.update({ image: null }, { where: { user_id } });
    return res.status(200).json({ deleted: 'Profile pic deleted' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteProfilePic;
