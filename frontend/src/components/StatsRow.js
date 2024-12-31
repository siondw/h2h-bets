import React from 'react';

function StatsRow({ budgetRemaining, winnings, rank }) {
    const usedBudget = 100 - budgetRemaining;
    const barPercentage = Math.min((usedBudget / 100) * 100, 100);

    // Winnings color
    const winningsColor = winnings >= 0 ? '#2FA94E' : '#E52F2F';
    const winningsDisplay =
        winnings >= 0 ? `$${winnings}` : `$${Math.abs(winnings)}`;

    return (
        <div style={styles.container}>
            {/* Budget Card */}
            <div style={styles.card}>
                <p style={styles.title}>Budget</p>
                <p style={styles.value}>
                    ${usedBudget} / $100
                </p>
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

            {/* Winnings Card */}
            <div style={styles.card}>
                <p style={styles.title}>Winnings</p>
                <p style={{ ...styles.value, color: winningsColor }}>
                    {winningsDisplay}
                </p>
            </div>

            {/* Rank Card */}
            <div style={styles.card}>
                <p style={styles.title}>Rank</p>
                <p style={styles.value}>#{rank}</p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        gap: '8px',
        marginTop: '8px',
    },
    card: {
        flex: 1,
        backgroundColor: 'var(--color-white)',
        borderRadius: '8px',
        padding: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        textAlign: 'center',
    },
    title: {
        fontSize: '0.75rem',
        fontWeight: 600,
        color: '#666',
        marginBottom: '4px',
    },
    value: {
        fontSize: '1rem',
        fontWeight: 500,
        marginBottom: '4px',
    },
    progressBar: {
        position: 'relative',
        height: '6px',
        backgroundColor: '#eee',
        borderRadius: '3px',
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: '3px',
        transition: 'width 0.3s ease',
    },
};

export default StatsRow;
