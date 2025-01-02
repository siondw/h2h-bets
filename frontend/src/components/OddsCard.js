import React from "react";
import OddsRow from "./OddsRow";

const OddsCard = ({ mainMarkets, handleSelectBet }) => {
  if (!mainMarkets) {
    return <p>No main bets available.</p>;
  }

  return (
    <div style={styles.oddsCard}>
      {/* Header row */}
      <div style={styles.headerRow}>
        <div style={styles.headerCellTeam}>Team</div>
        <div style={styles.headerCell}>Spread</div>
        <div style={styles.headerCell}>Money</div>
        <div style={styles.headerCell}>Total</div>
      </div>

      {/* Away Team Row */}
      <OddsRow
        teamName={mainMarkets.awayTeamName}
        spread={mainMarkets.awaySpread}
        moneyLine={mainMarkets.awayML}
        total={{ ...mainMarkets.totalOver, label: `O ${mainMarkets.totalOver.number}` }}
        handleSelectBet={handleSelectBet}
      />

      {/* Divider with '@' symbol */}
      <div style={styles.dividerContainer}>
        <span style={styles.atSymbol}>@</span>
        <div style={styles.divider} />
      </div>

      {/* Home Team Row */}
      <OddsRow
        teamName={mainMarkets.homeTeamName}
        spread={mainMarkets.homeSpread}
        moneyLine={mainMarkets.homeML}
        total={{ ...mainMarkets.totalUnder, label: `U ${mainMarkets.totalUnder.number}` }}
        handleSelectBet={handleSelectBet}
      />
    </div>
  );
};

const styles = {
  oddsCard: {
    backgroundColor: "#fff",
    borderRadius: 6,
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  headerRow: {
    display: "flex",
    backgroundColor: "#f0f0f0",
    borderBottom: "1px solid #ddd",
    padding: "8px",
  },
  headerCellTeam: {
    flex: 1.2,
    fontSize: "0.75rem",
    fontWeight: "bold",
    color: "#555",
  },
  headerCell: {
    flex: 1,
    fontSize: "0.75rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#555",
  },
  oddsRow: {
    display: "flex",
    padding: "12px 8px",
    alignItems: "center",
  },
  teamCell: {
    flex: 1.2,
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "#333",
    marginRight: "8px",
  },
  dividerContainer: {
    display: "flex",
    alignItems: "center",
    margin: "0 10%", // 10% space on left and right
    height: "20px", // Reduced height
  },
  atSymbol: {
    marginRight: "8px",
    fontSize: "0.75rem", // Smaller font size
    fontWeight: "normal", // Not bold
    color: "#333",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#eee",
  },
  betPill: {
    flex: 1,
    margin: "0 4px",
    border: "1px solid #d9d9d9",
    borderRadius: 4,
    padding: "6px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "#fff",
    transition: "background-color 0.1s",
    height: "50px",
    justifyContent: "center",
  },
  spread: {
    fontSize: "0.75rem",
    fontWeight: 500,
    color: "#444",
  },
  overUnderLabel: {
    fontSize: "0.75rem",
    fontWeight: 500,
    color: "#444",
    display: "inline",
  },
  odds: {
    marginTop: 2,
    fontSize: "0.72rem",
    fontWeight: "bold",
    color: "#007aff",
  },
};

export default OddsCard;
