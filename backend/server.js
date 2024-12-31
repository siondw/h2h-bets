require('dotenv').config();
const express = require('express');
const cors = require('cors');
const betsRouter = require('./routes/bets');
const leaderboardRouter = require('./routes/leaderboard');

// Initialize Express
const app = express();

// Middleware
app.use(cors());               // Allow cross-origin requests
app.use(express.json());       // Parse JSON bodies

// Routes
app.use('/api/bets', betsRouter);
app.use('/api/leaderboard', leaderboardRouter);

// Healthcheck (optional)
app.get('/api/healthcheck', (req, res) => {
  res.json({ status: 'OK' });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
