const asyncHandler = require('express-async-handler');
const db = require('../config/db'); // Adjust path as necessary

// @desc    Create a new blog post
// @route   POST /api/blogs
// @access  Private
const createBlog = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const query = 'INSERT INTO blogs (user_id, title, content) VALUES (?, ?, ?)';
  const [result] = await db.query(query, [req.user._id, title, content]);
  if (result.affectedRows) {
    res.status(201).json({
      id: result.insertId,
      title,
      content,
    });
  } else {
    res.status(400);
    throw new Error('Error creating blog post');
  }
});

// @desc    Get all blog posts
// @route   GET /api/blogs
// @access  Public
const getAllBlogs = asyncHandler(async (req, res) => {
  const [blogs] = await db.query('SELECT * FROM blogs');
  res.status(200).json(blogs);
});

// @desc    Get a single blog post by ID
// @route   GET /api/blogs/:id
// @access  Public
const getBlogById = asyncHandler(async (req, res) => {
  const [blog] = await db.query('SELECT * FROM blogs WHERE id = ?', [req.params.id]);
  if (blog.length > 0) {
    res.status(200).json(blog[0]);
  } else {
    res.status(404);
    throw new Error('Blog post not found');
  }
});

// @desc    Update a blog post
// @route   PUT /api/blogs/:id
// @access  Private
const updateBlog = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const query = 'UPDATE blogs SET title = ?, content = ? WHERE id = ?';
  const [result] = await db.query(query, [title, content, req.params.id]);
  if (result.affectedRows) {
    res.status(200).json({
      id: req.params.id,
      title,
      content,
    });
  } else {
    res.status(404);
    throw new Error('Blog post not found');
  }
});

// @desc    Delete a blog post
// @route   DELETE /api/blogs/:id
// @access  Private
const deleteBlog = asyncHandler(async (req, res) => {
  const query = 'DELETE FROM blogs WHERE id = ?';
  const [result] = await db.query(query, [req.params.id]);
  if (result.affectedRows) {
    res.status(200).json({ message: 'Blog post removed successfully' });
  } else {
    res.status(404);
    throw new Error('Blog post not found');
  }
});

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
