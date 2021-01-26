const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String
});

module.exports = mongoose.model("url", UrlSchema);