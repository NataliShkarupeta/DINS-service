const User = require("./user.model");

const createUser = async (data) => {
  const user = new User(data);
  console.log("user", user);
  return await user.save();
};


const getAllUsers = async () => {
  return await User.find({});
};

module.exports = {
  createUser,
  getAllUsers,
};


