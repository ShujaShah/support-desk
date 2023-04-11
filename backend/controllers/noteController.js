const asyncHandler = require('express-async-handler');
const { getNotes, addNote} = require("../models/usecases/noteUC");

// @desc    Get notes for a ticket
// @route   GET /api/tickets/:ticketId/notes
// @access  Private
const getNoteController = async (req, res) => {
  try {
    let getNote = await getNotes(req, res);
    return getNote;
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};

// @desc    Create ticket note
// @route   POST /api/tickets/:ticketId/notes
// @access  Private
const addNoteController = async (req, res) => {
  try {
    const createNote = await addNote(req, res);
    return createNote;
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getNoteController,
  addNoteController,
}