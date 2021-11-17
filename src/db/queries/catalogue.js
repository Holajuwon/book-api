module.exports = {
  /**
   * @description Creates the user_catalogue table
   */
  createUserCatalogueTable: `
    CREATE TABLE IF NOT EXISTS user_catalogue(
      id SERIAL PRIMARY KEY,
      book_id INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      created_on TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_on TIMESTAMP NOT NULL DEFAULT NOW()
    );
  `,
  /**
   * @description add book to user_catalogue
   * @param {Number} book_id - book id
   * @param {Number} user_id - user id
   * @returns {promise} - added catalogue
   */
  addCatalogue: `
    INSERT INTO user_catalogue(book_id, user_id)
    VALUES($1, $2)
    RETURNING *;
  `,

  /**
   * @description get all user_catalogue
   * @param {Number} user_id - user id
   * @returns {promise} - all user_catalogue
   */
  getUserCatalogue: `
    SELECT * FROM user_catalogue
    LEFT JOIN books
    ON user_catalogue.book_id = books.id
    WHERE user_catalogue.user_id = $1
  `,

  /**
   * @description delete a catalogue
   * @param {Number} id - catalogue id
   * @returns {promise} - deleted catalogue
   */
  deleteCatalogue: `
    DELETE FROM user_catalogue  
    WHERE id = $1
    RETURNING *;
  `,

  getCatalogueByIdAndUserId: `
    SELECT * FROM user_catalogue
    WHERE id = $1 AND user_id = $2
  `,
};
