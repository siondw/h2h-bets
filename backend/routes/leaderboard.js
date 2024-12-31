const express = require('express');
const router = express.Router();

// GET the leaderboard (test route)
router.get('/', (req, res) => {
  // Return a placeholder leaderboard array
  res.json({
    leaderboard: [
      { user: 'Alice', totalProfit: 120 },
      { user: 'Bob', totalProfit: 90 },
      { user: 'Charlie', totalProfit: 60 }
    ]
  });
});

module.exports = router;
