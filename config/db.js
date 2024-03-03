const mongoose = require('mongoose');
const { DATABASE_URI } = process.env;

mongoose.connect(DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(1);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});
