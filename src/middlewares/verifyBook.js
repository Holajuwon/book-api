const { getBookById } = require("../services");
const { errorResponse } = require("../utils/errorResponse");

module.exports = async (req, res, next) => {
  let { id } = req.params;
  if (!id) return errorResponse(req, res, 400, "Book id is required");

  const book = await getBookById(id);

  if (!book.length) {
    errorResponse(req, res, 404, "Book not found");
  }

  req.book = book[0];
  return next();
};
