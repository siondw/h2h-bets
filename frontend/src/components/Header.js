import React from 'react';

function Header({ contestName, onBack, onFavorite }) {
  return (
    <header style={styles.header}>
      <button style={styles.iconButton} onClick={onBack}>
        ←
      </button>
      <h1 style={styles.title}>{contestName}</h1>
      <button style={styles.iconButton} onClick={onFavorite}>
        ❤️
      </button>
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',          // spans the entire screen width
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-white)',
    padding: '0 16px',
    zIndex: 1000,
  },
  iconButton: {
    fontSize: '1.25rem',
    color: 'var(--color-white)',
    cursor: 'pointer',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: '1.1rem',
    fontWeight: 500,
  },
};

export default Header;
