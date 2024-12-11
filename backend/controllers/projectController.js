const asyncHandler = require('express-async-handler');
const db = require('../config/db'); // Adjust path as necessary

// @desc    Create a new project
// @route   POST /api/projects
// @access  Private
const createProject = asyncHandler(async (req, res) => {
  const { title, description, techStack } = req.body;
  const query = 'INSERT INTO projects (user_id, title, description, tech_stack) VALUES (?, ?, ?, ?)';
  const [result] = await db.query(query, [req.user._id, title, description, techStack]);
  if (result.affectedRows) {
    res.status(201).json({
      id: result.insertId,
      title,
      description,
      techStack,
    });
  } else {
    res.status(400);
    throw new Error('Error creating project');
  }
});

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getAllProjects = asyncHandler(async (req, res) => {
  const [projects] = await db.query('SELECT * FROM projects');
  res.status(200).json(projects);
});

// @desc    Get a single project by ID
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = asyncHandler(async (req, res) => {
  const [project] = await db.query('SELECT * FROM projects WHERE id = ?', [req.params.id]);
  if (project.length > 0) {
    res.status(200).json(project[0]);
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private
const updateProject = asyncHandler(async (req, res) => {
  const { title, description, techStack } = req.body;
  const query = 'UPDATE projects SET title = ?, description = ?, tech_stack = ? WHERE id = ?';
  const [result] = await db.query(query, [title, description, techStack, req.params.id]);
  if (result.affectedRows) {
    res.status(200).json({
      id: req.params.id,
      title,
      description,
      techStack,
    });
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private
const deleteProject = asyncHandler(async (req, res) => {
  const query = 'DELETE FROM projects WHERE id = ?';
  const [result] = await db.query(query, [req.params.id]);
  if (result.affectedRows) {
    res.status(200).json({ message: 'Project removed successfully' });
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
