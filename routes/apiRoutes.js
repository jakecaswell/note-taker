//Requires
const router = require('express').Router();
const store = require('../db/store');
const path = require('path');
const { notes } = require('../db/db.json');

// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
    store.getNotes()
    .then(notes => {
        res.json(notes)
    });
})

// Post "/api/notes" responds with adding a note to database
router.post('/notes', (req, res) => {
    store.addNote(req.body)
})

// DELETE "/api/notes" deletes the note with an id equal to req.params.id


// export
module.exports = router
