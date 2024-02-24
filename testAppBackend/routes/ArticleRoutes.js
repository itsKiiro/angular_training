const express = require('express');
const router = express.Router();
const Article = require('../models/Article.model');

router.get("/get/articles/", async (req, res) => {
    try {
        const articles = await Article.find({});
        res.json(articles);
    } catch (error) {
        console.error(error)
    }
})



module.exports = router;