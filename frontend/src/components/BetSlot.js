import React from 'react';
import { FaCircle } from 'react-icons/fa';

function BetSlot({ status, name, pick, odds, winnings, amount }) {
    let statusIconColor = '#4B9EF5'; // default
    let statusText = 'In Progress';

    if (status === 'hit') {
        statusIconColor = '#2FA94E';
        statusText = 'Hit';
    } else if (status === 'missed') {
        statusIconColor = '#E52F2F';
        statusText = 'Missed';
    }

    const hasWinnings = winnings > 0 ? `+$${winnings}` : `$${winnings}`;
    const winningsColor = winnings > 0 ? '#2FA94E' : winnings < 0 ? '#E52F2F' : '#333';

    return (
        <div style={styles.slotCard}>
            <div style={styles.statusColumn}>
                <FaCircle style={{ color: statusIconColor, fontSize: '1rem' }} />
                <div style={styles.statusText}>{statusText}</div>
            </div>
            <div style={styles.betInfo}>
                <div style={styles.betName}>{name}</div>
                <div style={styles.pick}>
                    {pick} <span style={styles.odds}>{odds}</span>
                </div>
            </div>
            <div style={styles.rightSection}>
                <div style={{ color: winningsColor, fontWeight: 'bold' }}>
                    {hasWinnings}
                </div>
                <div style={styles.amount}>Bet: ${amount}</div>
            </div>
        </div>
    );
}

const styles = {
    slotCard: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--color-white)',
        borderRadius: '8px',
        marginBottom: '10px',
        padding: '10px 16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
    },
    statusColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: '12px',
        minWidth: '50px', // ensures room for text
        maxWidth: '48px', // ensures wrapping
    },
    statusText: {
        marginTop: '4px',
        fontSize: '0.75rem',
        color: '#666',
        textAlign: 'center',
        whiteSpace: 'normal',  // allow wrapping
        wordWrap: 'break-word', // ensure wrapping
        maxWidth: '48px', // ensures wrapping
    },
    betInfo: {
        flex: 1,
    },
    betName: {
        fontWeight: 500,
        marginBottom: '4px',
    },
    pick: {
        fontSize: '0.9rem',
        color: '#666',
    },
    odds: {
        marginLeft: '8px',
        fontWeight: 600,
        color: '#333',
    },
    rightSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    amount: {
        fontSize: '0.8rem',
        color: '#666',
    },
};

export default BetSlot;