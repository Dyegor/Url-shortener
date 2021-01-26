const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to DB");
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB; 