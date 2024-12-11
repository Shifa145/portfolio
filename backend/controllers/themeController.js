const asyncHandler = require('express-async-handler');
const db = require('../config/db'); // assuming you have a db configuration file to manage MySQL connection

// @desc    Get theme settings for the user
// @route   GET /api/theme
// @access  Private
const getThemeSettings = asyncHandler(async (req, res) => {
  try {
    const query = 'SELECT theme FROM themes WHERE user_id = ?';
    const [rows] = await db.query(query, [req.user.id]);

    if (rows.length > 0) {
      res.json(rows[0].theme);
    } else {
      res.status(404).json({ message: 'Theme not found for the user' });
    }
  } catch (error) {
    res.status(500);
    throw new Error('Server Error');
  }
});

// @desc    Update theme settings for the user
// @route   PUT /api/theme
// @access  Private
const updateThemeSettings = asyncHandler(async (req, res) => {
  try {
    const { theme } = req.body;
    const query = 'UPDATE themes SET theme = ? WHERE user_id = ?';
    const [result] = await db.query(query, [theme, req.user.id]);

    if (result.affectedRows > 0) {
      res.json({ message: 'Theme updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500);
    throw new Error('Server Error');
  }
});

module.exports = {
  getThemeSettings,
  updateThemeSettings,
};
