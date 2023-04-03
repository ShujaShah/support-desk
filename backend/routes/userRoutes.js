const express = require("express");
const router = express.Router();
const { registerUserController, loginUserController, getMe } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const { testCase } = require("../models/usecases/userUc");

router.post("/", registerUserController);
router.get("/me", protect, getMe); //this route is protected, we are using an auth middleware here

router.post("/login", loginUserController);


module.exports = router;
