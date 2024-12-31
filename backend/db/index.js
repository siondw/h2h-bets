const { Pool } = require('pg');

// Configure the PostgreSQL connection
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

// Query to fetch general event data
async function fetchEvents() {
  try {
    const result = await pool.query(`
      SELECT 
        e.event_id, e.sport_id, e.league_id, e.type, 
        home_team.name_long AS home_team, 
        away_team.name_long AS away_team, 
        e.odds_overview, e.starts_at 
      FROM events e
      JOIN teams home_team ON e.home_team_id = home_team.team_id
      JOIN teams away_team ON e.away_team_id = away_team.team_id
    `);
    console.log(result.rows);
  } catch (err) {
    console.error('Error fetching events:', err);
  }
}

// Run the fetch function for testing
fetchEvents();
