export interface Game {
  id: number;
  homeTeam: string;
  homeScore: number;
  awayTeam: string;
  awayScore: number;
  createDate: number;
}

export const createEmptyGame = (homeTeam, awayTeam): Game => ({
  id: new Date().getTime(),
  homeTeam: homeTeam,
  homeScore: 0,
  awayTeam: awayTeam,
  awayScore: 0,
  createDate: new Date().getTime(),
});
