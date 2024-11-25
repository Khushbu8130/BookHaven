import BookList from "../model/booklist.model.js";

export const getBookList = async(req, res) => {
    try {
        const booklist = await BookList.find();
        res.status(200).json(booklist);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};



