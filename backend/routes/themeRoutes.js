const express = require('express');
const router = express.Router();
const { getThemeSettings, updateThemeSettings } = require('../controllers/themeController');
const { protect } = require('../middleware/authMiddleware');
const { validateTheme } = require('../middleware/themeValidator'); // Ensure proper import

// Route to get theme settings (protected route)
router.get('/', protect, async (req, res, next) => {
  try {
    const themeSettings = await getThemeSettings(req.user.id);
    res.status(200).json(themeSettings);
  } catch (error) {
    next(error); // Pass error to global error handler
  }
});

// Route to update theme settings (protected and validated)
router.put('/', protect, validateTheme, async (req, res, next) => {
  try {
    const updatedSettings = await updateThemeSettings(req.user.id, req.body);
    res.status(200).json(updatedSettings);
  } catch (error) {
    next(error); // Pass error to global error handler
  }
});

module.exports = router;
