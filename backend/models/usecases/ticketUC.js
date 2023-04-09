const asyncHandler = require("express-async-handler");

const User = require("../entities/userModel");
const Ticket = require("../entities/ticketModel");

// @desc        Get user tickets
// @route       GET /api/tickets/
// @access      Private

const getTickets = asyncHandler(async (req, res) => {
  //get user using the id in the jwt
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  const tickets = await Ticket.find({ user: req.user.id });

  res.status(200).json(tickets);
});

// @desc        Get Single user ticket
// @route       GET /api/tickets/:id
// @access      Private

const getTicket = asyncHandler(async (req, res) => {
  //get user using the id in the jwt
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(404);
    throw new Error("Not Authorized");
  }

  res.status(200).json(ticket);
});

// @desc        Create New ticket
// @route       POST /api/tickets/
// @access      Private

const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body;

  if (!product || !description) {
    res.status(400);
    throw new Error("Please add a product and description");
  }
  //get user using the id in the jwt
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: "new",
  });
  res.status(201).json(ticket);
});

// @desc        Update Single user ticket
// @route       PUT /api/tickets/:id
// @access      Private

const editTicket = asyncHandler(async (req, res) => {
  //get user using the id in the jwt
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(404);
    throw new Error("Not Authorized");
  }

  const UpdatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(UpdatedTicket);
});

// @desc        Get Delete ticket
// @route       DELETE /api/tickets/:id
// @access      Private

const deleteTicket = asyncHandler(async (req, res) => {
  //get user using the id in the jwt
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(404);
    throw new Error("Not Authorized");
  }
  await Ticket.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true });
});

module.exports = { getTickets, createTicket, getTicket, editTicket, deleteTicket };
