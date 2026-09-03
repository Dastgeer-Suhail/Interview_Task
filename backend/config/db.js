const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/taskmanager';
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 2000 });
    console.log('MongoDB Connected');
  } catch (err) {
    try {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongoServer = await MongoMemoryServer.create();
      await mongoose.connect(mongoServer.getUri());
      console.log('Connected to In-Memory MongoDB');
    } catch (memErr) {
      console.error('Database connection error:', err.message);
    }
  }
};

module.exports = connectDB;
