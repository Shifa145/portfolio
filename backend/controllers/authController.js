const asyncHandler = require("express-async-handler");
const db = require("../config/db"); // Adjust path as necessary
const generateToken = require("../utils/generateToken");

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  const [result] = await db.query(query, [name, email, password]);
  if (result.affectedRows) {
    res.status(201).json({
      id: result.insertId,
      name,
      email,
      token: generateToken(result.insertId),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Login a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ?';
  const [user] = await db.query(query, [email]);

  if (user.length > 0 && (await user[0].matchPassword(password))) {
    res.json({
      id: user[0].id,
      name: user[0].name,
      email: user[0].email,
      token: generateToken(user[0].id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

module.exports = { registerUser, loginUser };
