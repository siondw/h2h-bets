import React from "react";

const OddsRow = ({ teamName, spread, moneyLine, total, handleSelectBet, awayTeamAbbr, homeTeamAbbr }) => (
  <div style={styles.oddsRow}>
    {/* Team Name */}
    <div style={styles.teamCell}>{teamName}</div>

    {/* Spread */}
    <div
      style={styles.betPill}
      onClick={() => spread && handleSelectBet(spread)}
    >
      {spread ? (
        <>
          <span style={styles.spread}>{spread.spread}</span>
          <span style={styles.odds}>{spread.odds}</span>
        </>
      ) : (
        "--"
      )}
    </div>

    {/* Money Line */}
    <div
      style={styles.betPill}
      onClick={() => moneyLine && handleSelectBet(moneyLine)}
    >
      {moneyLine ? <span style={styles.odds}>{moneyLine.odds}</span> : "--"}
    </div>

    {/* Total */}
    <div
      style={styles.betPill}
     // OddsRow for the Total bet
    onClick={() => total && handleSelectBet(total)}
    >
      {total ? (
        <div style={styles.overUnderContainer}>
          <span style={styles.overUnderLabel}>{total.label}</span>
          <span style={styles.odds}>{total.odds}</span>
        </div>
      ) : (
        "--"
      )}
    </div>
  </div>
);

const styles = {
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
  overUnderContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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

export default OddsRow;