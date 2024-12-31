import React from 'react';

function Footer({ isReadyToSubmit, onSave, onCancel }) {
  return (
    <footer style={styles.footer}>
      <div style={styles.buttonGroup}>
        <button
          style={{
            ...styles.actionButton,
            backgroundColor: isReadyToSubmit ? 'var(--color-primary)' : '#CCC',
            color: 'var(--color-white)',
          }}
          onClick={onSave}
          disabled={!isReadyToSubmit}
        >
          Save Changes
        </button>
        <button
          style={{
            ...styles.actionButton,
            backgroundColor: '#E0E0E0',
            color: '#333',
          }}
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '10px',
    backgroundColor: 'var(--color-white)',
    borderTop: '1px solid #ddd',
    zIndex: 999,
  },
  buttonGroup: {
    maxWidth: '430px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '8px',
  },
  actionButton: {
    flex: 1,
    padding: '12px 0',
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Footer;
