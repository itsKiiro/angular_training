const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    description: {
        type: String,
    },
    tags: [String],
    price: {
        type: Number,
    },
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;