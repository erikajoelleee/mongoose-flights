require('dotenv').config();
// Connect to the database
require('./config/database');

// Require the app's Mongoose models
const Movie = require('./models/flight');
const Performer = require('./models/ticket');

// Example CRUD

// Top-level await (using await outside of an async function)
// has been available since Node v14.8
let flights = await Flight.find({});
console.log(flights);
