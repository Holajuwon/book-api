const {
  addBook,
  getAllBooks,
  updateBook,
} = require("../services");
const { errorResponse } = require("../utils/errorResponse");
const { successResponse } = require("../utils/successResponse");

module.exports = {
  /**
   * @desc create Book
   * @route POST /api/v1/Book
   * @param {Request} req http request object
   * @param {Response} res http response object
   * @returns {Response} a success response with created Book.
   */
  createBook: async (req, res) => {
    try {
      let { id } = req.user;

      const { title, author } = req.body;
      const book = await addBook(id, title, author);
      successResponse(res, 201, "Book created successfully", book);
    } catch (error) {
      errorResponse(req, res, 500, error.message);
    }
  },

  /**
   * @desc get Book by client id
   * @route GET /api/v1/Book/:client_id
   * @param {Request} req http request object
   * @param {Response} res http response object
   * @returns {Response} a success response with all Books.
   */
  getBookByClientId: async (req, res) => {
    try {
      let { id } = req.user;

      const Book = await getBookByClientId(id);
      if (!Book.length)
        return errorResponse(req, res, 404, "user have not created an Book");
      successResponse(res, 200, "Books retrieved successfully", Book);
    } catch (error) {
      errorResponse(req, res, 500, error.message);
    }
  },

  /**
   * @desc get all Books
   * @route GET /api/v1/Book
   * @param {Request} req http request object
   * @param {Response} res http response object
   * @returns {Response} a success response with all Books.
   */
  getAllBooks: async (req, res) => {
    try {
      const books = await getAllBooks();
      successResponse(res, 200, "Books retrieved successfully", books);
    } catch (error) {
      errorResponse(req, res, 500, error.message);
    }
  },

  updateBook: async (req, res) => {
    try {
      let { id } = req.book;

      const { title, author } = req.body;
      const book = await updateBook(id, title, author);
      successResponse(res, 200, "Book updated successfully", book);
    } catch (error) {
      errorResponse(req, res, 500, error.message);
    }
  },
};
