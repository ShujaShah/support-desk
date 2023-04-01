const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getMe } = require("../controllers/userController");
const {protect} = require('../middleware/authMiddleware') 

router.post("/", registerUser);
router.get("/me", protect, getMe); //this route is protected, we are using an auth middleware here 

router.post("/login", loginUser);

module.exports = router;
