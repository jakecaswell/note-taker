const util = require('util');
const fs = require('fs');

// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
const uuidv1 = require('uuid/v1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const notesArray = [];

class Store {

  read() {
    return readFileAsync('db/db.json', 'utf8');
  }

  write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note));
  }

  getNotes() {

    // read and return notes
    return this.read();

      // If notes isn't an array or can't be turned into one, send back a new empty array
 
      
  }

  addNote(note) {
    // creat note object with validation
    const { title, text } = note

    // Add a unique id to the note using uuid package
    const newNote = {title, text, id: uuidv1()}

    // Get all notes, add the new note, write all the updated notes, return the newNote
    this.getNotes()
    notesArray.push(newNote);
    console.log(notesArray);
    this.write(notesArray);
    return newNote;
  }

  removeNote(id) {
    // Get all notes, remove the note with the given id, write the filtered notes
    
  }
}


// export
module.exports = new Store();