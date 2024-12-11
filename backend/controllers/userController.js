const asyncHandler = require("express-async-handler");
const mysql = require("mysql2/promise"); // Ensure MySQL library is installed
const generateToken = require("../utils/generateToken");

// MySQL connection configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  let connection;
  try {
    // Establish MySQL connection
    connection = await mysql.createConnection(dbConfig);

    // Check if the user already exists
    const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
    
    if (rows.length > 0) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Insert new user into the database
    const [result] = await connection.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);

    if (result.affectedRows > 0) {
      res.status(201).json({
        _id: result.insertId,
        name,
        email,
        token: generateToken(result.insertId),
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to register user", error: error.message });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

// @desc    Login a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  let connection;
  try {
    // Establish MySQL connection
    connection = await mysql.createConnection(dbConfig);

    // Fetch user data
    const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
    
    if (rows.length > 0 && rows[0].password === password) { // Assuming password comparison as a placeholder; hash it before storing and before comparison
      res.json({
        _id: rows[0].id,
        name: rows[0].name,
        email: rows[0].email,
        token: generateToken(rows[0].id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to login user", error: error.message });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

module.exports = { registerUser, loginUser };
