/**
 * Mock data directly based on the raw API response for testing the transformation function.
 */

export const rawApiResponse = {
    nextCursor: "n.1736100000000.uktfsF2ddQ9TZ6zzYkC9",
    success: true,
    data: [
      {
        eventID: "WVx0gKVrgoVM8qk4BG8W",
        sportID: "FOOTBALL",
        leagueID: "NFL",
        type: "match",
        status: {
          finalized: false,
          ended: false,
          cancelled: false,
          started: false,
          live: false,
          oddsAvailable: true,
          oddsOverview: "Ravens favored by 17.5 points",
          startsAt: "2025-01-04T21:30:00.000Z"
        },
        odds: {
          "points-home-game-ml-home": {
            statID: "points",
            statEntityID: "home",
            periodID: "game",
            betTypeID: "ml",
            sideID: "home",
            started: false,
            ended: false,
            cancelled: false,
            bookOddsAvailable: true,
            fairOddsAvailable: true,
            fairOdds: "-650",
            bookOdds: "-650",
            openFairOdds: "-650",
            openBookOdds: "-650",
            scoringSupported: true,
            byBookmaker: {
              draftkings: {
                odds: "-650",
                lastUpdatedAt: "2024-12-31T14:54:56.000Z"
              }
            }
          },
          "points-away-game-ml-away": {
            statID: "points",
            statEntityID: "away",
            periodID: "game",
            betTypeID: "ml",
            sideID: "away",
            started: false,
            ended: false,
            cancelled: false,
            bookOddsAvailable: true,
            fairOddsAvailable: true,
            fairOdds: "+400",
            bookOdds: "+400",
            openFairOdds: "+400",
            openBookOdds: "+400",
            scoringSupported: true,
            byBookmaker: {
              draftkings: {
                odds: "+400",
                lastUpdatedAt: "2024-12-31T14:54:56.000Z"
              }
            }
          },
          "points-all-game-ou-over": {
            statID: "points",
            statEntityID: "all",
            periodID: "game",
            betTypeID: "ou",
            sideID: "over",
            started: false,
            ended: false,
            cancelled: false,
            bookOddsAvailable: true,
            fairOddsAvailable: true,
            fairOdds: "-135",
            bookOdds: "-135",
            fairOverUnder: "13.5",
            bookOverUnder: "13.5",
            openFairOdds: "-135",
            openBookOdds: "-135",
            openFairOverUnder: "13.5",
            openBookOverUnder: "13.5",
            scoringSupported: true,
            byBookmaker: {
              draftkings: {
                odds: "-135",
                overUnder: "13.5",
                lastUpdatedAt: "2024-12-31T14:54:56.000Z"
              }
            }
          },
          "points-all-game-ou-under": {
            statID: "points",
            statEntityID: "all",
            periodID: "game",
            betTypeID: "ou",
            sideID: "under",
            started: false,
            ended: false,
            cancelled: false,
            bookOddsAvailable: true,
            fairOddsAvailable: true,
            fairOdds: "+105",
            bookOdds: "+105",
            fairOverUnder: "13.5",
            bookOverUnder: "13.5",
            openFairOdds: "+105",
            openBookOdds: "+105",
            openFairOverUnder: "13.5",
            openBookOverUnder: "13.5",
            scoringSupported: true,
            byBookmaker: {
              draftkings: {
                odds: "+105",
                overUnder: "13.5",
                lastUpdatedAt: "2024-12-31T14:54:56.000Z"
              }
            }
          },
          "points-home-game-sp-home": {
            statID: "points",
            statEntityID: "home",
            periodID: "game",
            betTypeID: "sp",
            sideID: "home",
            started: false,
            ended: false,
            cancelled: false,
            bookOddsAvailable: true,
            fairOddsAvailable: true,
            fairOdds: "-110",
            bookOdds: "-110",
            fairSpread: "-17.5",
            bookSpread: "-17.5",
            openFairOdds: "-110",
            openBookOdds: "-110",
            openFairSpread: "-17.5",
            openBookSpread: "-17.5",
            scoringSupported: true,
            byBookmaker: {
              draftkings: {
                odds: "-110",
                spread: "-17.5",
                lastUpdatedAt: "2024-12-31T14:54:56.000Z"
              }
            }
          },
          "points-away-game-sp-away": {
            statID: "points",
            statEntityID: "away",
            periodID: "game",
            betTypeID: "sp",
            sideID: "away",
            started: false,
            ended: false,
            cancelled: false,
            bookOddsAvailable: true,
            fairOddsAvailable: true,
            fairOdds: "-110",
            bookOdds: "-110",
            fairSpread: "+17.5",
            bookSpread: "+17.5",
            openFairOdds: "-110",
            openBookOdds: "-110",
            openFairSpread: "+17.5",
            openBookSpread: "+17.5",
            scoringSupported: true,
            byBookmaker: {
              draftkings: {
                odds: "-110",
                spread: "+17.5",
                lastUpdatedAt: "2024-12-31T14:54:56.000Z"
              }
            }
          }
        }
      }
    ]
  };
  