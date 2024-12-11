const { body, validationResult } = require('express-validator');

// Validation for project input
const validateProject = [
  body('title')
    .isString()
    .notEmpty()
    .withMessage('Title is required.')
    .isLength({ min: 3 })
    .withMessage('Title must be at least 3 characters long.'),
  
  body('description')
    .isString()
    .notEmpty()
    .withMessage('Description is required.'),
  
  body('techStack')
    .isArray()
    .withMessage('Tech Stack must be an array of strings.')
    .notEmpty()
    .withMessage('Tech Stack cannot be empty.'),
  
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
    next();
  },
];

// Validation for blog input
const validateBlog = [
  body('title')
    .isString()
    .notEmpty()
    .withMessage('Title is required.'),
  
  body('content')
    .isString()
    .notEmpty()
    .withMessage('Content is required.'),
  
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
    next();
  },
];

module.exports = {
  validateProject,
  validateBlog,
};
