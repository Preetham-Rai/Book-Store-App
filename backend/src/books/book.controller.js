import Book from "./book.model.js";

const postBook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book Posted Successfully", book: newBook });
  } catch (error) {
    console.log("Error While creating the book", error);
    res.status(500).send({ message: "Failed" });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.log("Error While Fetching the books", error);
    res.status(500).send({ message: "Failed to fetch the books" });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send(book);
  } catch (error) {
    console.log("Error While Fetching the book", error);
    res.status(500).send({ message: "Failed to fetch the book" });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      res.status(404).send({ message: "Book is not found" });
    }
    res.status(200).send({
      message: "Book Updated Successfully",
      book: updatedBook,
    });
  } catch (error) {
    console.log("Error While Updating the book", error);
    res.status(500).send({ message: "Failed to Update the book" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      res.status(404).send({ message: "Book is not found" });
    }
    res.status(200).send({
      message: "Book Deleted Successfully",
      book: deletedBook,
    });
  } catch (error) {
    console.log("Error While Deleting the book", error);
    res.status(500).send({ message: "Failed to delete the book" });
  }
};

export { postBook, getBooks, getSingleBook, updateBook, deleteBook };
