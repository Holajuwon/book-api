const {
  createUserTable,
  createUser,
  findUserByEmail,
  updatePassword,
} = require("./user");
const {
  createBookTable,
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
} = require("./books");
const {
  createUserCatalogueTable,
  addCatalogue,
  getUserCatalogue,
  deleteCatalogue,
  getCatalogueByIdAndUserId,
} = require("./catalogue");

module.exports = {
  createUserTable,
  createUser,
  updatePassword,
  findUserByEmail,
  createBookTable,
  addBook,
  getAllBooks,
  updateBook,
  getBookById,
  createUserCatalogueTable,
  addCatalogue,
  getUserCatalogue,
  deleteCatalogue,
  getCatalogueByIdAndUserId,
};
