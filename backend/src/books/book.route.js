import express from "express";
import Book from "./book.model.js";
import {
  postBook,
  getBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} from "./book.controller.js";

const router = express.Router();

router.post("/create-book", postBook);
router.get("/", getBooks);
router.get("/:id", getSingleBook);
router.put("/edit/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
