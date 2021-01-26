const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
require("dotenv").config();

const longUrl = require("./routes/urlRoute");

const port = process.env.PORT || 8080;
const baseUrl = process.env.baseURL;

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(baseUrl, longUrl);

app.listen(port, () => {
    console.log("Listening on port", port);
});