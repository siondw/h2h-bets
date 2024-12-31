-- Insert data into teams
INSERT INTO teams (team_id, name_short, name_medium, name_long, primary_color, secondary_color, primary_contrast, secondary_contrast)
VALUES
('BALTIMORE_RAVENS_NFL', 'BAL', 'Ravens', 'Baltimore Ravens', '#340E57', NULL, '#FFFFFF', NULL),
('CLEVELAND_BROWNS_NFL', 'CLE', 'Browns', 'Cleveland Browns', '#FF3900', '#38312C', '#000000', '#FF3900');

-- Insert data into players
INSERT INTO players (player_id, name, team_id)
VALUES
('LAMAR_JACKSON_BALTIMORE_RAVENS_NFL', 'Lamar Jackson', 'BALTIMORE_RAVENS_NFL'),
('DERRICK_HENRY_BALTIMORE_RAVENS_NFL', 'Derrick Henry', 'BALTIMORE_RAVENS_NFL'),
('ZAY_FLOWERS_BALTIMORE_RAVENS_NFL', 'Zay Flowers', 'BALTIMORE_RAVENS_NFL'),
('JERRY_JEUDY_CLEVELAND_BROWNS_NFL', 'Jerry Jeudy', 'CLEVELAND_BROWNS_NFL');

-- Insert data into events
INSERT INTO events (event_id, sport_id, league_id, type, home_team_id, away_team_id, status, odds_overview, starts_at)
VALUES
('WVx0gKVrgoVM8qk4BG8W', 'FOOTBALL', 'NFL', 'match', 'BALTIMORE_RAVENS_NFL', 'CLEVELAND_BROWNS_NFL',
    '{"hardStart": true, "started": false, "delayed": false, "completed": false, "finalized": false}', 'Ravens favored by 17.5 points', '2025-01-04T21:30:00.000Z');

-- Insert data into odds
INSERT INTO odds (odd_id, event_id, stat_id, period_id, bet_type_id, side_id, odds, spread, over_under, available)
VALUES
('points-away-game-sp-away', 'WVx0gKVrgoVM8qk4BG8W', 'points', 'game', 'sp', 'away', '+100', '+17.5', NULL, true),
('points-home-game-ou-over', 'WVx0gKVrgoVM8qk4BG8W', 'points', 'game', 'ou', 'over', '+100', NULL, '30', true);

-- Insert data into event_info
INSERT INTO event_info (event_id, season_week)
VALUES
('WVx0gKVrgoVM8qk4BG8W', 'NFL 24/25');
