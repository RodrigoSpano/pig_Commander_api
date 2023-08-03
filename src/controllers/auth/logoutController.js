
const logoutUser = async (req, res) => {
  try {
    req.session.destroy(((err) => res.status(400).json(err)));
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = logoutUser;