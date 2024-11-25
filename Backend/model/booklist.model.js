import mongoose from "mongoose";

const booklistSchema = mongoose.Schema({
    name: String,
    title: String,
    category: String,
    image: String,
    link: String,
});
const BookList = mongoose.model("BookList", booklistSchema);
export default BookList;


