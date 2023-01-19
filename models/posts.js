const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    title2: String,
    category: String,
    content: String,
    image: String,
    created: {
        type: Date,
        default: Date.now
    }
});

// const journalSchema = mongoose.Schema({
//     question: {type: String, default: "Pertanyaan ?"},
//     answer: String
// })

// const postSchema = mongoose.Schema({
//     journal:  [journalSchema],
// })

module.exports = mongoose.model("Post", postSchema);