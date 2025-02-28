const mongoose = require("mongoose");
class Mongodb {
  constructor() {
    this.connect();
  }

  async connect() {
    try {
      const response = await mongoose.connect(process.env.MONGO_DB_URL);
      console.log("Database connected");
    } catch (error) {
      console.log("MongoDB connection failed");
    }
  }
}

module.exports = new Mongodb();
