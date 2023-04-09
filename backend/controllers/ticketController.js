const asyncHandler = require("express-async-handler");
const { getTickets, createTicket, getTicket, deleteTicket, editTicket } = require("../models/usecases/ticketUC");

// @desc        Get user tickets
// @route       GET /api/tickets/
// @access      Private

const getTicketsController = async (req, res) => {
  try {
    let getAllTickets = await getTickets(req, res);
    return getAllTickets;
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};

// @desc        Create New ticket
// @route       POST /api/tickets/
// @access      Private

const createTicketController = async (req, res) => {
  try {
    const createSingleTicket = await createTicket(req, res);
    return createSingleTicket;
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};

// @desc        Get Single ticket
// @route       GET /api/tickets/
// @access      Private

const getTicketController = async (req, res) => {
  try {
    const getSingleTicket = await getTicket(req, res);
    return getSingleTicket;
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};

// @desc        Update Single ticket
// @route       PUT /api/tickets/
// @access      Private

const updateTicketController = async (req, res) => {
  try {
    const editSingleTicket = await editTicket(req, res);
    return editSingleTicket;
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};

// @desc        Delete Single ticket
// @route       DELETE /api/tickets/
// @access      Private

const deleteTicketController = async (req, res) => {
  try {
    const deleteSingleTicket = await deleteTicket(req, res);
    return deleteSingleTicket;
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTicketsController,
  createTicketController,
  getTicketController,
  deleteTicketController,
  updateTicketController,
};
