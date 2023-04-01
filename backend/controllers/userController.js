const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/entities/userModel");
const { generateToken } = require("../config/userToken");
const { registerUser, loginUser } = require("../models/usecases/userUc");

// @desc        Register a new user
// @route       /api/users/
// @access      Public

const registerUserController = async (req, res) => {
  try {
    let newUser = await registerUser(req, res);
    return newUser;
    if (newUser) {
      return await res.status(200).json({ statusCode: "200", newUser });
    } else {
      return await res.status(404).json({ statusCode: "404", newUser: {} });
    }
  } catch (error) {
    console.error(error.message);
  }
};

// @desc        Login user
// @route       /api/users/login
// @access      Public
const loginUserController = async(req, res)=>{
    try{
        let userLogin = await loginUser(req, res);
        return userLogin;
        if (userLogin) {
            return await res.status(200).json({ statusCode: "200", userLogin });
          } else {
            return await res.status(404).json({ statusCode: "404", userLogin: {} });
          }
        } catch (error) {
          console.error(error.message);
        }
    }

// @desc        Get current user
// @route       /api/users/me
// @access      Private

const getMe = asyncHandler(async (req, res) => {
  const user = {
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
  };
  res.status(200).json(user);
});

//Generate Token =====================> I moved this code to another file in config. userToken.js

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: "30d",
//   });
// };

module.exports = {
  registerUserController,
  loginUser,
  getMe,
};
