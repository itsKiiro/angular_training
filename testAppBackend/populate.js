const mongoose = require("mongoose");
const Article = require("./models/Article.model");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);


const populateArticles = async () => {
    await Article.deleteMany({});

    await Article.create([
        {
            title: "VR",
            description: "Virtual Reality",
            imageUrl: "virtual.png"
        },
        {
            title: "AR",
            description: "Augmented Reality",
            imageUrl: "augmented.webp"
        }
    ])

    console.log("articles created")
}

populateArticles();