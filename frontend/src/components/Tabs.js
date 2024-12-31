import React from 'react';
import { FaUserFriends, FaTrophy, FaListUl, FaInfoCircle } from 'react-icons/fa';
//  ^ Example icons (feel free to choose others that suit your app)

function Tabs({ activeTab, onTabChange }) {
  const tabs = [
    { label: 'My Team', icon: <FaUserFriends /> },
    { label: 'Leaderboards', icon: <FaTrophy /> },
    { label: 'All Bets', icon: <FaListUl /> },
    { label: 'Rules', icon: <FaInfoCircle /> },
  ];

  return (
    <nav style={styles.nav}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.label;
        return (
          <button
            key={tab.label}
            onClick={() => onTabChange(tab.label)}
            style={{
              ...styles.tabButton,
              ...(isActive ? styles.activeTab : {}),
            }}
          >
            <div style={styles.tabIcon}>{tab.icon}</div>
            <div style={styles.tabLabel}>{tab.label}</div>
          </button>
        );
      })}
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    marginTop: '56px', // offset for fixed header
    backgroundColor: 'var(--color-white)',
  },
  tabButton: {
    flex: 1,
    padding: '12px 0',
    background: 'none',
    border: 'none',
    color: '#aaa',
    fontSize: '0.85rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  activeTab: {
    color: 'var(--color-primary)',
    fontWeight: 600,
  },
  tabIcon: {
    fontSize: '1.2rem',
    marginBottom: '2px',
  },
  tabLabel: {
    fontSize: '0.75rem',
  },
};

export default Tabs;
