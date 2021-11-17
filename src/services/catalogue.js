const {
  addCatalogue,
  getUserCatalogue,
  deleteCatalogue,
  getCatalogueByIdAndUserId,
} = require("../db/queries");
const { db } = require("../db");

module.exports = {
  /**
   * @description - This function is used to add a book to the user catalogue
   * @param {String} book_id - The user id
   * @param {String} user_id - The book id
   * @returns {Object} - The catalogue
   */
  addCatalogue: async (book_id, user_id) => {
    return db.any(addCatalogue, [book_id, user_id]);
  },
  /**
   * @description - This function gets all books
   * @returns {Object} - The list of all book
   */
  getUserCatalogue: (user_id) => {
    return db.any(getUserCatalogue, [user_id]);
  },

  /**
   * @description - delete a book from the user catalogue
   * @returns {Object} - the book
   */
  deleteCatalogue: (catalogue_id) => {
    return db.any(deleteCatalogue, [catalogue_id]);
  },
  getCatalogueByIdAndUserId: (catalogue_id, user_id) => {
    return db.any(getCatalogueByIdAndUserId, [catalogue_id, user_id]);
  },
};
