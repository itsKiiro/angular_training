const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/api/images', express.static('./images'));


const ArticleRoutes = require("./routes/ArticleRoutes.js");


mongoose.connect(process.env.MONGO_URL);

app.use("/api", ArticleRoutes)

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})