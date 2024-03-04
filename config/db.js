const mongoose = require('mongoose');
const { DATABASE_URI } = process.env;

// Maintain a reference to the connected instances
const connectedInstances = {};

const connectToDatabase = async (instanceName = 'default') => {
  // Check if the connection for this instance already exists
  if (connectedInstances[instanceName]) {
    console.log(`Using existing connection for instance: ${instanceName}`);
    return connectedInstances[instanceName];
  }

  try {
    const connection = await mongoose.connect(DATABASE_URI);

    console.log(`Connected to MongoDB for instance: ${instanceName}`);

    // Save the connection instance for reuse
    connectedInstances[instanceName] = connection;

    // Handle disconnection events
    connection.connection.on('disconnected', () => {
      console.log(`MongoDB connection for instance ${instanceName} disconnected`);
      delete connectedInstances[instanceName];
    });

    // Handle errors
    connection.connection.on('error', (error) => {
      console.error(`MongoDB connection error for instance ${instanceName}: ${error}`);
    });

    return connection;
  } catch (error) {
    console.error(`MongoDB connection error for instance ${instanceName}: ${error}`);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
