const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// here we are using async await to connect to the database
// the try catch block is used to catch any errors
// inside the try block we are using the mongoose.connect method to connect to the database, 
// we are passing in the db variable which is the mongoURI from the default.json file
// we are also passing in an object with some options
// the useNewUrlParser option is used to parse the url
// the useCreateIndex option is used to create indexes in the database
// the useFindAndModify option is used to find and modify the database
// the useUnifiedTopology option is used to use the new server discovery and monitoring engine
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
// if the connection is successful we will log a message to the console
    console.log('MongoDB Connected...');
    // Exit process with success
  } catch (err) { // if there is an error we will log the error message to the console
    console.error(err.message); // log the error message
    // Exit process with failure // exit the process with a failure
    process.exit(1); // exit the process with a failure
  }
};

module.exports = connectDB;
