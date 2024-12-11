const express = require('express');
const router = express.Router();
const { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createBlog);
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.put('/:id', protect, updateBlog);
router.delete('/:id', protect, deleteBlog);

module.exports = router;
