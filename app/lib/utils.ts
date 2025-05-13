import { Games } from "./definitions";
import { Averages } from "./definitions";

//try calcAverages = async ....
export const calcAverages = (stats: Games): Averages => {

    const playedGames = stats.response.filter(game => game.min != null)
    const totalGames = playedGames.length

    if (totalGames === 0) return { pointsAvg: 0, assistsAvg: 0, rebAvg: 0 };

    const totalPoints = playedGames.reduce((sum, game) => sum + (game.points || 0), 0);
    const totalAssists = playedGames.reduce((sum, game) => sum + (game.assists || 0), 0);
    const totalRebounds = playedGames.reduce((sum, game) => sum + (game.totReb || 0), 0);

    const pointsAvg = parseFloat((totalPoints/totalGames).toFixed(2));
    const assistsAvg = parseFloat((totalAssists/totalGames).toFixed(2));
    const rebAvg = parseFloat((totalRebounds/totalGames).toFixed(2));

    return { pointsAvg, assistsAvg, rebAvg} ;
}