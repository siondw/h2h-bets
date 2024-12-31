import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Tabs from '../components/Tabs';
import StatsRow from '../components/StatsRow';
import BetSlotList from '../components/BetSlotList';
import { useSlots } from '../context/SlotsContext'; // <-- import context

function MyTeamScreen() {
  const navigate = useNavigate();

  const { slots, setSlots } = useSlots();  // get slots from context
  const [activeTab, setActiveTab] = useState('My Team');
  const [contestName] = useState('Week 11 Contest');
  const [budgetRemaining, setBudgetRemaining] = useState(70);
  const [winnings, setWinnings] = useState(30);
  const [rank, setRank] = useState(3);

  // We removed the local slots array—now we use context

  const handleSlotClick = (slotIndex) => {
    // navigate to select bet screen, passing index
    navigate(`/select-bet?slotIndex=${slotIndex}`);
  };

  const handleBack = () => {
    alert('Back clicked');
  };

  const handleFavorite = () => {
    alert('Contest favorited!');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={styles.screen}>
      <Header
        contestName={contestName}
        onBack={handleBack}
        onFavorite={handleFavorite}
      />
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="container" style={styles.mainContent}>
        {activeTab === 'My Team' && (
          <>
            {/* Our new 3-card floating row */}
            <StatsRow
              budgetRemaining={budgetRemaining}
              winnings={winnings}
              rank={rank}
            />
            <BetSlotList slots={slots} onSlotClick={handleSlotClick} />
          </>
        )}
        {activeTab === 'Leaderboards' && <div>Leaderboards Content</div>}
        {activeTab === 'All Bets' && <div>All Bets Content</div>}
        {activeTab === 'Rules' && <div>Rules Content</div>}
      </div>
    </div>
  );
}

const styles = {
  screen: {
    position: 'relative',
    paddingTop: '0',
    // No footer, so no bottom spacing needed
  },
  mainContent: {
    marginTop: '12px', // space after tabs
  },
};

export default MyTeamScreen;