import express from "express";
import {
  postBook,
  getBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} from "./book.controller.js";
import verifyAdminToken from "../middleware/verifyAdmin.js";

const router = express.Router();

router.post("/create-book", verifyAdminToken, postBook);
router.get("/", getBooks);
router.get("/:id", getSingleBook);
router.put("/edit/:id", verifyAdminToken, updateBook);
router.delete("/:id", verifyAdminToken, deleteBook);

export default router;
