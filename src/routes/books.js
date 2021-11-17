const express = require("express");
const router = express.Router();

const {
  createBook,
  getAllBooks,
  updateBook,
  getBookByClientId,
} = require("../controllers");
const { createBookSchema } = require("../db/schemas/books");
const {
  adminAuthorization,
} = require("../middlewares/auth/adminAuthorization");
const validateInput = require("../middlewares/requestValidator/validateInput");
const verifyBook = require("../middlewares/verifyBook");
const { verifyToken } = require("../middlewares/verifyToken");

router
  .get("/all", [verifyToken], getAllBooks)
  .get("/", [verifyToken], getBookByClientId)
  .post(
    "/",
    [verifyToken, adminAuthorization, validateInput(createBookSchema, "body")],
    createBook
  )
  .put(
    "/:id",
    [
      verifyToken,
      adminAuthorization,
      verifyBook,
      validateInput(createBookSchema, "body"),
    ],
    updateBook
  );

module.exports = router;
