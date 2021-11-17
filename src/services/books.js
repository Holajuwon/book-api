const {
  addBook,
  updateBook,
  getAllBooks,
  getBookById,
  getIncidentByClientId,
} = require("../db/queries");
const { db } = require("../db");

module.exports = {
  /**
   * @description - This function creates an book
   * @param {String} admin_id - The admin id that added the book
   * @param {String} title - The title of the book
   * @param {String} author - The author of the book
   * @returns {Object} - The created book
   */
  addBook: async (admin_id, title, author) => {
    return db.any(addBook, [admin_id, title, author]);
  },
  /**
   * @description - This function gets all books
   * @returns {Object} - The list of all book
   */
  getAllBooks: () => {
    return db.any(getAllBooks);
  },

  /**
   * @description - This function gets all incidents by client id
   * @param {String} client_id - The id of the user creating the incident
   * @returns {Object} - The list of all incident matching the user id
   */
  getIncidentByClientId: (id) => {
    return db.any(getIncidentByClientId, [id]);
  },
  updateBook: async (id, title, author) => {
    return db.any(updateBook, [id, title, author]);
  },
  getBookById: async (id) => {
    return db.any(getBookById, [id]);
  },
};
