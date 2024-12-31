import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import { useSlots } from '../context/SlotsContext';
import { mockNflOdds } from '../data/MockNflOdds';

function SelectBetScreen() {
  const [searchParams] = useSearchParams();
  const slotIndex = parseInt(searchParams.get('slotIndex'), 10) || 0;

  const { slots, setSlots } = useSlots();
  const navigate = useNavigate();

  // We'll assume there's only one NFL game in mockNflOdds[0].
  const game = mockNflOdds[0]; 
  const gameOdds = game.odds;

  // Create a simplified array of bets to display
  const availableBets = parseOddsToSimpleBets(gameOdds);

  const handleBack = () => {
    navigate(-1);
  };

  const handleFavorite = () => {
    alert('Favorite clicked on SelectBetScreen');
  };

  const handleSelectBet = (bet) => {
    // Construct a new bet object
    const newBet = {
      status: 'inProgress',
      name: `NFL: ${bet.label}`,  // e.g. "NFL: Home ML"
      pick: bet.pick,
      odds: bet.odds,
      winnings: 0,
      amount: 10 // Hard-coded for example
    };

    // Update the correct slot
    const updatedSlots = [...slots];
    updatedSlots[slotIndex] = newBet;
    setSlots(updatedSlots);

    // Go back to MyTeam
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
        {availableBets.length === 0 ? (
          <p>No bets available.</p>
        ) : (
          <div style={styles.list}>
            {availableBets.map((bet, i) => (
              <div
                key={i}
                style={styles.betItem}
                onClick={() => handleSelectBet(bet)}
              >
                <p style={styles.betLabel}>{bet.label}</p>
                <p style={styles.betDetails}>
                  {bet.pick} (Odds: {bet.odds})
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Helper: Turn the raw odds object into an array of { label, pick, odds }
 * focusing on DraftKings only, ignoring other books.
 */
function parseOddsToSimpleBets(oddsObj) {
  if (!oddsObj) return [];

  const results = [];
  // Go through each key in oddsObj
  for (const key in oddsObj) {
    const item = oddsObj[key];
    if (!item.bookOddsAvailable) continue; // skip if no odds
    const bk = item.byBookmaker?.draftkings;
    if (!bk) continue; // skip if no DraftKings data

    // figure out betType (ml, sp, ou)
    const betType = item.betTypeID; 
    let label = '';
    let pick = '';
    let odds = '';

    switch (betType) {
      case 'ml':
        label = key.includes('home') ? 'Home ML' : 'Away ML';
        pick = key.includes('home') ? 'Home' : 'Away';
        odds = bk.odds; 
        break;
      case 'ou':
        label = key.includes('over') ? `Over ${bk.overUnder}` : `Under ${bk.overUnder}`;
        pick = key.includes('over') ? 'Over' : 'Under';
        odds = bk.odds;
        break;
      case 'sp':
        // Spread
        label = key.includes('home')
          ? `Home Spread ${bk.spread}`
          : `Away Spread ${bk.spread}`;
        pick = bk.spread;
        odds = bk.odds;
        break;
      default:
        continue;
    }

    results.push({ label, pick, odds });
  }

  return results;
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
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  betItem: {
    backgroundColor: 'var(--color-white)',
    padding: '12px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    cursor: 'pointer',
  },
  betLabel: {
    fontWeight: 600,
    marginBottom: '4px',
  },
  betDetails: {
    color: '#666',
    fontSize: '0.9rem',
  }
};

export default SelectBetScreen;