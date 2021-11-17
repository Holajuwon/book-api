module.exports = {
  /**
   * @description Creates the book table
   */
  createBookTable: `
    CREATE TABLE IF NOT EXISTS books(
      id SERIAL PRIMARY KEY,
      admin_id INTEGER NOT NULL REFERENCES users(id),
      title TEXT,
      author TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );
  `,
  /**
   * @description add a book
   * @param {number} admin_id the id of the admin
   * @param {string} title title of the book
   * @param {string} author description of the book
   * @returns {Promise<object>}  returns the created book
   */
  addBook: `
    INSERT INTO books(admin_id, title, author)
    VALUES($1, $2, $3)
    RETURNING *;
  `,
  /**
   * @description Gets all books
   * @returns {Promise<object>}  returns all books
   */
  getAllBooks: `
    SELECT * FROM books;
  `,
  /**
   * @description Gets all books by incident id
   * @param {number} id the id of the incident
   * @returns {Promise<object>}  returns all books matching the id
   */
  getBookById: `
    SELECT * FROM books WHERE id = $1;
  `,
  /**
   * @description Gets all books by client id
   * @param {number} admin_id the id of the user
   * @returns {Promise<object>}  returns all books matching the client id
   */
  getBookByAdminId: `
    SELECT * FROM books WHERE client_id = $1;
  `,
  /**
   * @description Updates a book
   * @param {number} id the id of the book
   * @param {string} title the title of the book
   * @param {string} author the author of the book
   * @returns {Promise<object>}  returns the updated book
   */
  updateBook: `
    UPDATE books SET title = $2, author = $3, updated_at = NOW()
    WHERE id = $1
    RETURNING *;
  `,
  deleteBook: `
    DELETE FROM books WHERE id = $1;
  `,
};
