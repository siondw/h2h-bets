import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import { useSlots } from '../context/SlotsContext';
// mockNflOdds = rawApiResponse.data
import { mockNflOdds } from '../data/MockNflOdds';

function SelectBetScreen() {
  const [searchParams] = useSearchParams();
  const slotIndex = parseInt(searchParams.get('slotIndex'), 10) || 0;

  const { slots, setSlots } = useSlots();
  const navigate = useNavigate();

  // For now, just take the first game in mockNflOdds
  const game = mockNflOdds[0];

  // Parse out only the main line bets
  const mainMarkets = parseMainMarkets(game);

  const handleBack = () => {
    navigate(-1);
  };

  const handleFavorite = () => {
    alert('Favorite clicked on SelectBetScreen');
  };

  /**
   * On user click: construct newBet object and save it to context
   */
  const handleSelectBet = (bet) => {
    // bet will be something like: { label: 'Browns +17.5', pick: 'Browns', odds: '-110' }
    const newBet = {
      status: 'inProgress',
      name: `NFL: ${bet.label}`,   // e.g. "NFL: Browns +17.5"
      pick: bet.pick,             // e.g. "Browns"
      odds: bet.odds,            // e.g. -110
      winnings: 0,
      amount: 10 // Hard-coded for example
    };

    // Update the correct slot in our context
    const updatedSlots = [...slots];
    updatedSlots[slotIndex] = newBet;
    setSlots(updatedSlots);

    // Then go back to MyTeam or wherever you want
    navigate(-1);
  };

  return (
    <div style={styles.screen}>
      <Header
        contestName="Select an NFL Bet"
        onBack={handleBack}
        onFavorite={handleFavorite}
      />
      <div className="container" style={styles.content}>
        <h3 style={styles.title}>Choose a Bet for Slot #{slotIndex + 1}</h3>

        {!mainMarkets ? (
          <p>No main bets available.</p>
        ) : (
          <div style={styles.oddsCard}>
            {/* Column header row */}
            <div style={styles.headerRow}>
              <div style={{ flex: 3 }} />
              <div style={styles.headerCell}>Spread</div>
              <div style={styles.headerCell}>Money</div>
              <div style={styles.headerCell}>Total</div>
            </div>

            {/* AWAY row */}
            <div style={styles.row}>
              <div style={{ flex: 3 }}>
                {mainMarkets.awayTeamName}
              </div>
              {/* Spread */}
              <div
                style={styles.oddsCell}
                onClick={() => mainMarkets.awaySpread && handleSelectBet(mainMarkets.awaySpread)}
              >
                {mainMarkets.awaySpread ? (
                  <>
                    {mainMarkets.awaySpread.spread}&nbsp;
                    <span style={styles.oddsNumber}>{mainMarkets.awaySpread.odds}</span>
                  </>
                ) : '--'}
              </div>
              {/* Moneyline */}
              <div
                style={styles.oddsCell}
                onClick={() => mainMarkets.awayML && handleSelectBet(mainMarkets.awayML)}
              >
                {mainMarkets.awayML ? mainMarkets.awayML.odds : '--'}
              </div>
              {/* Over */}
              <div
                style={styles.oddsCell}
                onClick={() => mainMarkets.totalOver && handleSelectBet(mainMarkets.totalOver)}
              >
                {mainMarkets.totalOver ? (
                  <>
                    O {mainMarkets.totalOver.number}&nbsp;
                    <span style={styles.oddsNumber}>{mainMarkets.totalOver.odds}</span>
                  </>
                ) : '--'}
              </div>
            </div>

            {/* HOME row */}
            <div style={styles.row}>
              <div style={{ flex: 3 }}>
                {mainMarkets.homeTeamName}
              </div>
              {/* Spread */}
              <div
                style={styles.oddsCell}
                onClick={() => mainMarkets.homeSpread && handleSelectBet(mainMarkets.homeSpread)}
              >
                {mainMarkets.homeSpread ? (
                  <>
                    {mainMarkets.homeSpread.spread}&nbsp;
                    <span style={styles.oddsNumber}>{mainMarkets.homeSpread.odds}</span>
                  </>
                ) : '--'}
              </div>
              {/* Moneyline */}
              <div
                style={styles.oddsCell}
                onClick={() => mainMarkets.homeML && handleSelectBet(mainMarkets.homeML)}
              >
                {mainMarkets.homeML ? mainMarkets.homeML.odds : '--'}
              </div>
              {/* Under */}
              <div
                style={styles.oddsCell}
                onClick={() => mainMarkets.totalUnder && handleSelectBet(mainMarkets.totalUnder)}
              >
                {mainMarkets.totalUnder ? (
                  <>
                    U {mainMarkets.totalUnder.number}&nbsp;
                    <span style={styles.oddsNumber}>{mainMarkets.totalUnder.odds}</span>
                  </>
                ) : '--'}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Extract only the main line bets (spread, ML, total Over/Under).
 * Returns an object with shape:
 * {
 *   awayTeamName,
 *   homeTeamName,
 *   awaySpread: { label, pick, spread, odds } | null,
 *   homeSpread: { label, pick, spread, odds } | null,
 *   awayML:     { label, pick, odds } | null,
 *   homeML:     { label, pick, odds } | null,
 *   totalOver:  { label, pick, number, odds } | null,
 *   totalUnder: { label, pick, number, odds } | null,
 * }
 */
function parseMainMarkets(game) {
  if (!game || !game.odds) return null;

  const { teams, odds } = game;
  const awayTeam = teams.away.names.medium; // e.g. "Browns"
  const homeTeam = teams.home.names.medium; // e.g. "Ravens"

  // Keys we’re interested in
  const awaySpreadKey   = 'points-away-game-sp-away';
  const homeSpreadKey   = 'points-home-game-sp-home';
  const awayMLKey       = 'points-away-game-ml-away';
  const homeMLKey       = 'points-home-game-ml-home';
  const totalOverKey    = 'points-all-game-ou-over';
  const totalUnderKey   = 'points-all-game-ou-under';

  // Away spread
  const awaySpreadObj = odds[awaySpreadKey];
  const awaySpread = awaySpreadObj?.available ? {
    label: `${awayTeam} ${awaySpreadObj.bookSpread || awaySpreadObj.spread}`,
    pick: awayTeam,
    spread: awaySpreadObj.bookSpread || awaySpreadObj.spread,
    odds: awaySpreadObj.bookOdds || awaySpreadObj.odds
  } : null;

  // Home spread
  const homeSpreadObj = odds[homeSpreadKey];
  const homeSpread = homeSpreadObj?.available ? {
    label: `${homeTeam} ${homeSpreadObj.bookSpread || homeSpreadObj.spread}`,
    pick: homeTeam,
    spread: homeSpreadObj.bookSpread || homeSpreadObj.spread,
    odds: homeSpreadObj.bookOdds || homeSpreadObj.odds
  } : null;

  // Away ML
  const awayMLObj = odds[awayMLKey];
  const awayML = awayMLObj?.available ? {
    label: `${awayTeam} ML`,
    pick: awayTeam,
    odds: awayMLObj.bookOdds || awayMLObj.odds
  } : null;

  // Home ML
  const homeMLObj = odds[homeMLKey];
  const homeML = homeMLObj?.available ? {
    label: `${homeTeam} ML`,
    pick: homeTeam,
    odds: homeMLObj.bookOdds || homeMLObj.odds
  } : null;

  // Total Over
  const overObj = odds[totalOverKey];
  const totalOver = overObj?.available ? {
    label: `Over ${overObj.overUnder}`,
    pick: 'Over',
    number: overObj.overUnder,
    odds: overObj.bookOdds || overObj.odds
  } : null;

  // Total Under
  const underObj = odds[totalUnderKey];
  const totalUnder = underObj?.available ? {
    label: `Under ${underObj.overUnder}`,
    pick: 'Under',
    number: underObj.overUnder,
    odds: underObj.bookOdds || underObj.odds
  } : null;

  return {
    awayTeamName: teams.away.names.long,  // e.g. "Cleveland Browns"
    homeTeamName: teams.home.names.long,  // e.g. "Baltimore Ravens"
    awaySpread,
    homeSpread,
    awayML,
    homeML,
    totalOver,
    totalUnder
  };
}

const styles = {
  screen: {
    position: 'relative',
  },
  content: {
    marginTop: '56px', // offset header
    paddingTop: '16px',
  },
  title: {
    fontSize: '1rem',
    marginBottom: '12px',
  },
  oddsCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '600px',
  },
  headerRow: {
    display: 'flex',
    backgroundColor: '#f7f7f7',
    padding: '8px',
    fontWeight: 'bold',
    borderBottom: '1px solid #ddd'
  },
  headerCell: {
    flex: 1,
    textAlign: 'center'
  },
  row: {
    display: 'flex',
    padding: '8px',
    borderBottom: '1px solid #eee',
    alignItems: 'center',
  },
  oddsCell: {
    flex: 1,
    textAlign: 'center',
    cursor: 'pointer'
  },
  oddsNumber: {
    color: '#007aff',
    fontWeight: 'bold'
  }
};

export default SelectBetScreen;
