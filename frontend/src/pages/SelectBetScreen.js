import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import OddsCard from "../components/OddsCard";
import { useSlots } from "../context/SlotsContext";
import { mockNflOdds } from "../data/MockNflOdds";

function SelectBetScreen() {
  const [searchParams] = useSearchParams();
  const slotIndex = parseInt(searchParams.get("slotIndex"), 10) || 0;

  const { slots, setSlots } = useSlots();
  const navigate = useNavigate();

  const game = mockNflOdds[0];
  const mainMarkets = parseMainMarkets(game);

  const handleBack = () => navigate(-1);

  const handleFavorite = () => alert("Favorite clicked on SelectBetScreen");

  const handleSelectBet = (bet) => {
    const matchup = `${mainMarkets.awayTeamAbbr} v ${mainMarkets.homeTeamAbbr}`;
    const newBet = {
      status: "inProgress",
      name: `${matchup} ${bet.label}`, // Updated line
      pick: bet.pick,
      odds: bet.odds,
      winnings: 0,
      amount: 10,
    };

    const updatedSlots = [...slots];
    updatedSlots[slotIndex] = newBet;
    setSlots(updatedSlots);

    navigate(-1);
  };

  return (
    <div style={styles.screen}>
      <Header
        contestName="Select an NFL Bet"
        onBack={handleBack}
        onFavorite={handleFavorite}
      />
      <div style={styles.content}>
        <h3 style={styles.slotTitle}>Choose a Bet for Slot #{slotIndex + 1}</h3>
        <OddsCard mainMarkets={mainMarkets} handleSelectBet={handleSelectBet} />
      </div>
    </div>
  );
}

/**
 * Extract only main line bets (Spread, ML, Total O/U).
 */
function parseMainMarkets(game) {
  if (!game || !game.odds) return null;

  const { teams, odds } = game;
  const awayTeam = teams.away.names.medium;
  const homeTeam = teams.home.names.medium;

  const awaySpreadKey = "points-away-game-sp-away";
  const homeSpreadKey = "points-home-game-sp-home";
  const awayMLKey = "points-away-game-ml-away";
  const homeMLKey = "points-home-game-ml-home";
  const totalOverKey = "points-all-game-ou-over";
  const totalUnderKey = "points-all-game-ou-under";

  const awaySpreadObj = odds[awaySpreadKey];
  const homeSpreadObj = odds[homeSpreadKey];
  const awayMLObj = odds[awayMLKey];
  const homeMLObj = odds[homeMLKey];
  const overObj = odds[totalOverKey];
  const underObj = odds[totalUnderKey];

  return {
    awayTeamName: teams.away.names.long,
    homeTeamName: teams.home.names.long,
    awayTeamAbbr: teams.away.names.short,
    homeTeamAbbr: teams.home.names.short,

    awaySpread: awaySpreadObj?.available
      ? {
          label: `${awayTeam} ${awaySpreadObj.bookSpread || awaySpreadObj.spread}`,
          pick: awayTeam,
          spread: awaySpreadObj.bookSpread || awaySpreadObj.spread,
          odds: awaySpreadObj.bookOdds || awaySpreadObj.odds,
        }
      : null,
    homeSpread: homeSpreadObj?.available
      ? {
          label: `${homeTeam} ${homeSpreadObj.bookSpread || homeSpreadObj.spread}`,
          pick: homeTeam,
          spread: homeSpreadObj.bookSpread || homeSpreadObj.spread,
          odds: homeSpreadObj.bookOdds || homeSpreadObj.odds,
        }
      : null,
    awayML: awayMLObj?.available
      ? {
          label: `${awayTeam} ML`,
          pick: awayTeam,
          odds: awayMLObj.bookOdds || awayMLObj.odds,
        }
      : null,
    homeML: homeMLObj?.available
      ? {
          label: `${homeTeam} ML`,
          pick: homeTeam,
          odds: homeMLObj.bookOdds || homeMLObj.odds,
        }
      : null,
    totalOver: overObj?.available
      ? {
          label: `O ${overObj.overUnder}`,
          pick: "Over",
          number: overObj.overUnder,
          odds: overObj.bookOdds || overObj.odds,
        }
      : null,
    totalUnder: underObj?.available
      ? {
          label: `U ${underObj.overUnder}`,
          pick: "Under",
          number: underObj.overUnder,
          odds: underObj.bookOdds || underObj.odds,
        }
      : null,
  };
}

const styles = {
  screen: {
    position: "relative",
    backgroundColor: "#f7f7f7",
    minHeight: "100vh",
  },
  content: {
    marginTop: "56px", // Offset header
    padding: "16px",
  },
  slotTitle: {
    fontSize: "0.9rem",
    marginBottom: "12px",
  },
};

export default SelectBetScreen;