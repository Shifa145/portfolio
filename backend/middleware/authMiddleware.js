const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const mysql = require('mysql2/promise'); // Ensure MySQL library is installed


// MySQL connection configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

// @desc    Protect routes
// @route   Private
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Establish MySQL connection
      const connection = await mysql.createConnection(dbConfig);

      // Fetch user from the database
      const [rows] = await connection.execute('SELECT * FROM users WHERE id = ?', [decoded.id]);

      // Close MySQL connection
      await connection.end();

      if (rows.length > 0) {
        req.user = {
          id: rows[0].id,
          name: rows[0].name,
          email: rows[0].email,
        };
        next();
      } else {
        res.status(401);
        throw new Error('Not authorized, token failed');
      }
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

module.exports = {
  protect,
};
