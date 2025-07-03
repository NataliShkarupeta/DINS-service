const { addUserSchema } = require("./user.schemas");
const { createUser, getAllUsers } = require("./user.service");

const addUser = async (req, res, next) => {
  try {
    const { error } = addUserSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ status: "error", message: error.message });
    }

    const newUser = await createUser(req.body);
    res.status(201).json({ status: "success", user: newUser });
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(409)
        .json({
          status: "error",
          message: "Користувач з таким телефоном вже існує",
        });
    }
    next(err);
  }
};


const getUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addUser,
  getUsers,
};
