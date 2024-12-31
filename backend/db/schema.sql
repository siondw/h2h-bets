-- Create the teams table
CREATE TABLE teams (
    team_id VARCHAR PRIMARY KEY,
    name_short VARCHAR NOT NULL,
    name_medium VARCHAR NOT NULL,
    name_long VARCHAR NOT NULL,
    primary_color VARCHAR,
    secondary_color VARCHAR,
    primary_contrast VARCHAR,
    secondary_contrast VARCHAR
);

-- Create the players table
CREATE TABLE players (
    player_id VARCHAR PRIMARY KEY,
    name VARCHAR NOT NULL,
    team_id VARCHAR NOT NULL REFERENCES teams(team_id)
);

-- Create the events table
CREATE TABLE events (
    event_id VARCHAR PRIMARY KEY,
    sport_id VARCHAR NOT NULL,
    league_id VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    home_team_id VARCHAR NOT NULL REFERENCES teams(team_id),
    away_team_id VARCHAR NOT NULL REFERENCES teams(team_id),
    status JSONB NOT NULL,
    odds_overview VARCHAR,
    starts_at TIMESTAMP NOT NULL
);

-- Create the odds table
CREATE TABLE odds (
    odd_id VARCHAR PRIMARY KEY,
    event_id VARCHAR NOT NULL REFERENCES events(event_id),
    stat_id VARCHAR NOT NULL,
    period_id VARCHAR NOT NULL,
    bet_type_id VARCHAR NOT NULL,
    side_id VARCHAR NOT NULL,
    player_id VARCHAR REFERENCES players(player_id),
    odds VARCHAR NOT NULL,
    spread VARCHAR,
    over_under VARCHAR,
    available BOOLEAN NOT NULL
);

-- Create the event_info table
CREATE TABLE event_info (
    event_id VARCHAR PRIMARY KEY REFERENCES events(event_id),
    season_week VARCHAR NOT NULL
);
