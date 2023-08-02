// const { user } = require('../../db');

export const loginUser = async (req, res) => {
  try {
    return res.status(202).json({ message: ' te logeaste perri' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};