const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the CORS library
const connectDB = require('./config/db'); // Correct path
const errorHandler = require('./middleware/errorMiddleware');

// Import routes
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const blogRoutes = require('./routes/blogRoutes');
const contactRoutes = require('./routes/contactRoutes');
const themeRoutes = require('./routes/themeRoutes');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB().catch((err) => {
  console.error('Database connection failed:', err.message);
  process.exit(1); // Exit the application on DB failure
});

const app = express();

const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from frontend
  methods: 'GET,POST,PUT,DELETE', // Allow specific HTTP methods
  credentials: true, // Allow credentials like cookies
}));

// Middleware to parse incoming JSON requests
app.use(express.json());

// API Routes
app.use('/api/users', authRoutes); // Authentication routes
app.use('/api/projects', projectRoutes); // Project routes
app.use('/api/blogs', blogRoutes); // Blog routes
app.use('/api/contact', contactRoutes); // Contact form routes
app.use('/api/themes', themeRoutes); // Theme routes

// Root endpoint for backend testing
app.get('/', (req, res) => {
  res.send('Backend API is running...');
});

// 404 Fallback for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use(errorHandler); // Handle errors gracefully

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
