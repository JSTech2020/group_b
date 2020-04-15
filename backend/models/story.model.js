const mongoose = require('mongoose')

var Story = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    authorImage: {
        type: String,
        required: false,
    },
    shortDescription: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: false,
    },

})

module.exports = mongoose.model('Story', Story);