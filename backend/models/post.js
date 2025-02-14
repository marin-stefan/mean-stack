const mongoose = require('mongoose');

const postSchema = mongoose.Schema({ 
    title: { type: String, required: true },
    content: { type: String, required: true },
    imagePath: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);  //will create collection named posts (plural of the string)!