const express = require("express");
const router = express.Router();
const {
  getTicketsController,
  createTicketController,
  getTicketController,
  updateTicketController,
  deleteTicketController,
} = require("../controllers/ticketController");

const { protect } = require("../middleware/authMiddleware");

//Re-Route into note router
const noteRouter = require('./noteRoutes')
router.use('/:ticketId/notes', noteRouter)


router.route("/").get(protect, getTicketsController).post(protect, createTicketController);

router
  .route("/:id")
  .get(protect, getTicketController)
  .put(protect, updateTicketController)
  .delete(protect, deleteTicketController);
module.exports = router;
