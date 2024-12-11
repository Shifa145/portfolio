const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  let message = err.message;
  if (err.code === 'ER_DUP_ENTRY') {
      // Handle duplicate entry errors
      message = 'Duplicate entry. Please check the input fields.';
  } else if (err.code === 'ER_BAD_FIELD_ERROR') {
      // Handle bad field errors
      message = 'Invalid field in the request.';
  } else if (err.code === 'ER_ACCESS_DENIED_ERROR') {
      // Handle access denied errors
      message = 'Access denied. Please check your MySQL credentials.';
  }

  res.status(statusCode).json({
      message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : null,
  });
};

module.exports = errorHandler;
