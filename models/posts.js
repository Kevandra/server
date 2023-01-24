const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    title2: String,
    title3: String,
    title4: String,
    title5: String,
    title6: String,
    category: String,
    content: String,
    content2: String,
    content3: String,
    content4: String,
    content5: String,
    content6: String,
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
