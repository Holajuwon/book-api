const { createUser, getUserByEmail, updatePassword } = require("./user");
const { addBook, getAllBooks, updateBook, getBookById } = require("./books");
const {
  addCatalogue,
  getUserCatalogue,
  deleteCatalogue,
  getCatalogueByIdAndUserId,
} = require("./catalogue");

module.exports = {
  createUser,
  getUserByEmail,
  updatePassword,
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  addCatalogue,
  getUserCatalogue,
  deleteCatalogue,
  getCatalogueByIdAndUserId,
};
