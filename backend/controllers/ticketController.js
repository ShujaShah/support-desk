const asyncHandler = require('express-async-handler');

const User = require('../models/entities/userModel');
const Ticket = require('../models/entities/ticketModel');

// @desc        Get user tickets
// @route       GET /api/tickets/
// @access      Private

const getTickets = asyncHandler(async (req, res) => {
    
    res.status(200).json({message: 'getTickets'});
  });
  
  
// @desc        Create New ticket
// @route       POST /api/tickets/
// @access      Private


  const createTicket = asyncHandler(async (req, res) => {
    
    res.status(200).json({message: 'createTickets'});
  });

  module.exports = {getTickets, createTicket}
  