const { createUser, login, forgotPassword, resetPassword } = require("./user");
const {
  createBook,
  getAllBooks,
  getBookByClientId,
  updateBook,
} = require("./books");
const {
  addCatalogue,
  getUserCatalogue,
  deleteCatalogue,
} = require("./catalogue");

module.exports = {
  createUser,
  login,
  forgotPassword,
  resetPassword,
  createBook,
  getAllBooks,
  getBookByClientId,
  updateBook,
  addCatalogue,
  getUserCatalogue,
  deleteCatalogue,
};
