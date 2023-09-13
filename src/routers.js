const express = require('express');
const router = express.Router();


const NotesControllers = require('./controllers');


router.get('/getAll', NotesControllers.getAllNotes);
router.post('/get', NotesControllers.NotesGetByUserId);
router.post('/create', NotesControllers.CreateNotes);
router.post('/delete', NotesControllers.DeleteNotes)



module.exports = router