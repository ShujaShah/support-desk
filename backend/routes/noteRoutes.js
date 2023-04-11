const express = require("express");
const router = express.Router({ mergeParams: true });
const { getNoteController, addNoteController } = require("../controllers/noteController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getNoteController).post(protect, addNoteController);

module.exports = router;
