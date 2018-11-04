const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
    {
        name: "Casey Neistat",
        occupation: "Youtuber",
        catchPhrase: "Work hard"
    },
    {
        name: "Florian Neuschwander",
        occupation: "Ultrarunner",
        catchPhrase: "#geilballern"
    },
    {
        name: "Ryan Gosling",
        occupation: "Actor",
        catchPhrase: "Hey girl"
    }
]

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
  });