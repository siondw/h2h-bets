import React, { createContext, useContext, useState } from 'react';

/**
 * slots: array of 8 objects
 * each object: { status, name, pick, odds, winnings, amount }
 * or null if not filled
 */
const SlotsContext = createContext();

export function SlotsProvider({ children }) {
  // Example: 2 pre-filled slots, others empty
  const [slots, setSlots] = useState([
    {
      status: 'hit',
      name: 'Team A vs Team B',
      pick: 'Team A - Moneyline',
      odds: '-140',
      winnings: 50,
      amount: 20
    },
    {
      status: 'inProgress',
      name: 'Team C vs Team D',
      pick: 'Team D - Under 42.5',
      odds: '-110',
      winnings: 0,
      amount: 15
    },
    // The rest are empty placeholders:
    null, null, null, null, null, null
  ]);

  return (
    <SlotsContext.Provider value={{ slots, setSlots }}>
      {children}
    </SlotsContext.Provider>
  );
}

export function useSlots() {
  return useContext(SlotsContext);
}
