import React from 'react';

function LeaderboardSummary({ budgetRemaining, winnings, rank }) {
  const usedBudget = 100 - budgetRemaining;
  const barPercentage = Math.min((usedBudget / 100) * 100, 100);

  const winningsColor = winnings >= 0 ? '#2FA94E' : '#E52F2F';
  const winningsDisplay = winnings >= 0 ? `+$${winnings}` : `-$${Math.abs(winnings)}`;

  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <span style={styles.label}>Budget:</span>
        <span>${budgetRemaining} / $100</span>
        <div style={styles.progressBar}>
          <div
            style={{
              ...styles.progressFill,
              width: `${barPercentage}%`,
              backgroundColor: barPercentage < 100 ? '#2FA94E' : '#E52F2F',
            }}
          />
        </div>
      </div>
      <div style={styles.section}>
        <span style={styles.label}>Winnings:</span>
        <span style={{ color: winningsColor, fontWeight: 600 }}>{winningsDisplay}</span>
      </div>
      <div style={styles.section}>
        <span style={styles.label}>Rank:</span>
        <span>#{rank}</span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '0',
    backgroundColor: 'var(--color-white)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '10px 16px',
    borderBottom: '1px solid #ddd',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  label: {
    fontWeight: 500,
  },
  progressBar: {
    position: 'relative',
    height: '6px',
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: '3px',
    marginLeft: '8px',
  },
  progressFill: {
    height: '100%',
    borderRadius: '3px',
    transition: 'width 0.3s ease',
  },
};

export default LeaderboardSummary;
