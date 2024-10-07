const User = require('../models/User');

const getProfile = async (req, res) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  res.json(user);
};

module.exports = { getProfile };
