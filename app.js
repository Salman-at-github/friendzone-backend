const express = require('express');
const app = express();
const expressConfig = require('./config/expressConfig');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const tokenRoutes = require('./routes/tokenRoutes');
const userRoutes = require('./routes/userRoutes');

// Apply middleware configurations
expressConfig(app);

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/tokens', tokenRoutes);
app.use('/api/users', userRoutes);

// Global error handling middleware
app.use(errorHandler);

module.exports = app;