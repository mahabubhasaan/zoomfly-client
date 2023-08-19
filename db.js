const mongoose = require('mongoose');

// Replace 'your-database-url' with the actual connection URL of your MongoDB database
const mongoURI = 'mongodb://localhost:27017/zoomfly';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
