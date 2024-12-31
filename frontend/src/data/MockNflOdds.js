import { rawApiResponse } from './RawApiResponse';

export const transformOddsResponse = (apiResponse) => {
  return apiResponse.data.map((event) => {
    const odds = {};

    // Extract odds for Moneyline, Over/Under, and Spread
    if (event.odds) {
      const bookmakers = ["draftkings"];

      // Process Moneyline odds
      if (event.odds["points-home-game-ml-home"]?.bookOddsAvailable) {
        odds["points-home-game-ml-home"] = {
          bookOddsAvailable: event.odds["points-home-game-ml-home"].bookOddsAvailable,
          betTypeID: event.odds["points-home-game-ml-home"].betTypeID,
          byBookmaker: bookmakers.reduce((obj, bookmaker) => {
            if (event.odds["points-home-game-ml-home"].byBookmaker[bookmaker]) {
              obj[bookmaker] = event.odds["points-home-game-ml-home"].byBookmaker[bookmaker];
            }
            return obj;
          }, {}),
        };
      }

      if (event.odds["points-away-game-ml-away"]?.bookOddsAvailable) {
        odds["points-away-game-ml-away"] = {
          bookOddsAvailable: event.odds["points-away-game-ml-away"].bookOddsAvailable,
          betTypeID: event.odds["points-away-game-ml-away"].betTypeID,
          byBookmaker: bookmakers.reduce((obj, bookmaker) => {
            if (event.odds["points-away-game-ml-away"].byBookmaker[bookmaker]) {
              obj[bookmaker] = event.odds["points-away-game-ml-away"].byBookmaker[bookmaker];
            }
            return obj;
          }, {}),
        };
      }

      // Process Over/Under odds
      if (event.odds["points-all-game-ou-over"]?.bookOddsAvailable) {
        odds["points-all-game-ou-over"] = {
          bookOddsAvailable: event.odds["points-all-game-ou-over"].bookOddsAvailable,
          betTypeID: event.odds["points-all-game-ou-over"].betTypeID,
          byBookmaker: bookmakers.reduce((obj, bookmaker) => {
            if (event.odds["points-all-game-ou-over"].byBookmaker[bookmaker]) {
              obj[bookmaker] = event.odds["points-all-game-ou-over"].byBookmaker[bookmaker];
            }
            return obj;
          }, {}),
        };
      }

      if (event.odds["points-all-game-ou-under"]?.bookOddsAvailable) {
        odds["points-all-game-ou-under"] = {
          bookOddsAvailable: event.odds["points-all-game-ou-under"].bookOddsAvailable,
          betTypeID: event.odds["points-all-game-ou-under"].betTypeID,
          byBookmaker: bookmakers.reduce((obj, bookmaker) => {
            if (event.odds["points-all-game-ou-under"].byBookmaker[bookmaker]) {
              obj[bookmaker] = event.odds["points-all-game-ou-under"].byBookmaker[bookmaker];
            }
            return obj;
          }, {}),
        };
      }

      // Process Spread odds
      if (event.odds["points-home-game-sp-home"]?.bookOddsAvailable) {
        odds["points-home-game-sp-home"] = {
          bookOddsAvailable: event.odds["points-home-game-sp-home"].bookOddsAvailable,
          betTypeID: event.odds["points-home-game-sp-home"].betTypeID,
          byBookmaker: bookmakers.reduce((obj, bookmaker) => {
            if (event.odds["points-home-game-sp-home"].byBookmaker[bookmaker]) {
              obj[bookmaker] = event.odds["points-home-game-sp-home"].byBookmaker[bookmaker];
            }
            return obj;
          }, {}),
        };
      }

      if (event.odds["points-away-game-sp-away"]?.bookOddsAvailable) {
        odds["points-away-game-sp-away"] = {
          bookOddsAvailable: event.odds["points-away-game-sp-away"].bookOddsAvailable,
          betTypeID: event.odds["points-away-game-sp-away"].betTypeID,
          byBookmaker: bookmakers.reduce((obj, bookmaker) => {
            if (event.odds["points-away-game-sp-away"].byBookmaker[bookmaker]) {
              obj[bookmaker] = event.odds["points-away-game-sp-away"].byBookmaker[bookmaker];
            }
            return obj;
          }, {}),
        };
      }
    }

    return {
      eventID: event.eventID,
      sportID: event.sportID,
      leagueID: event.leagueID,
      type: event.type,
      status: {
        finalized: event.status.finalized,
        started: event.status.started,
        startsAt: event.status.startsAt,
        cancelled: event.status.cancelled,
        live: event.status.live,
        oddsAvailable: event.status.oddsAvailable,
        oddsOverview: event.status.oddsOverview,
      },
      odds,
    };
  });
};

// Use the function to transform the mock API response
export const mockNflOdds = transformOddsResponse(rawApiResponse);