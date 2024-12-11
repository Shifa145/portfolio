const { body, validationResult } = require('express-validator');

const validateTheme = [
  // Validation for 'theme' field
  body('theme')
    .isString()
    .notEmpty()
    .withMessage('Theme is required.')
    .isIn(['light', 'dark'])
    .withMessage('Invalid theme type. Allowed values are "light" or "dark".'),
  
  // Middleware to handle validation errors
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array().map((error) => ({
          field: error.param,
          message: error.msg,
        })),
      });
    }

    next(); // Proceed if no validation errors
  },
];

module.exports = { validateTheme };
