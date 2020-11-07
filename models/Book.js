const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    authors: {
        type: Array,
        required: true
    }, 
    description: {
        type: String,
        trim: true,
        required: "Description is required."
    }, 
    image: {
        type: String,
        required: "Image is required."
    },
    link: {
        type: String,
        required: "Link is required."
    },
    title: {
        type: String,
        trim: true,
        required: "Title is required."
    }
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book; 