// filepath: /d:/h2h-bets/frontend/src/data/MockNflOdds.test.js
import { transformOddsResponse } from "./MockNflOdds";
import { rawApiResponse } from "./RawApiResponse";

describe("transformOddsResponse", () => {
  it("should transform the raw API response correctly", () => {
    const transformedOdds = transformOddsResponse(rawApiResponse);

    // Example assertions based on the expected structure of transformedOdds
    expect(transformedOdds).toBeInstanceOf(Array);
    expect(transformedOdds.length).toBeGreaterThan(0);

    const firstEvent = transformedOdds[0];
    expect(firstEvent).toHaveProperty("eventID");
    expect(firstEvent).toHaveProperty("sportID");
    expect(firstEvent).toHaveProperty("leagueID");
    expect(firstEvent).toHaveProperty("type");
    expect(firstEvent).toHaveProperty("status");
    expect(firstEvent).toHaveProperty("odds");

    // Check the structure of the odds object
    const odds = firstEvent.odds;
    expect(odds).toHaveProperty("points-home-game-ml-home");
    expect(odds["points-home-game-ml-home"]).toHaveProperty(
      "bookOddsAvailable"
    );
    expect(odds["points-home-game-ml-home"]).toHaveProperty("betTypeID");
    expect(odds["points-home-game-ml-home"]).toHaveProperty("byBookmaker");
    expect(odds["points-home-game-ml-home"].byBookmaker).toHaveProperty(
      "draftkings"
    );
  });
});
