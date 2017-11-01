const { Pool } = require('pg');
const pool = new Pool();

module.exports = {
  raw: (text, params) => pool.query(text, params),
  getUsers: () => pool.query('SELECT id, forename, surname, dob, nationality FROM "user-details"', []),
};
