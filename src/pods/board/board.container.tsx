import React from "react";
import { BoardComponent } from "./board.component";
import { Game, createEmptyGame } from "./game.vm";

export const BoardContainer: React.FunctionComponent = () => {
  const [livesGamesMap, setlivesGamesMap] = React.useState<Array<Game>>(
    new Array<Game>()
  );
  const [summaryGamesMap, setsummaryGamesMap] = React.useState<Array<Game>>(
    new Array<Game>()
  );

  const handleCreate = (homeTeam: string, awayTeam: string) => {
    const newGame = createEmptyGame(homeTeam, awayTeam);
    setlivesGamesMap([...livesGamesMap, newGame]);
    setsummaryGamesMap([...summaryGamesMap, newGame]);
  };

  const handleUpdate = (id: number, homeScore: number, awayScore: number) => {
    livesGamesMap.find((game) => {
      if (game.id === id) {
        game.homeScore = homeScore;
        game.awayScore = awayScore;
      }
    });
    setlivesGamesMap([...livesGamesMap]);

    summaryGamesMap.find((game) => {
      if (game.id === id) {
        game.homeScore = homeScore;
        game.awayScore = awayScore;
      }
    });
    summaryGamesMap.sort((gameA: Game, gameB: Game) => {
      const totalScoreA = gameA.homeScore + gameA.awayScore;
      const totalScoreB = gameB.homeScore + gameB.awayScore;
      if (totalScoreA > totalScoreB) {
        return -1;
      }
      if (totalScoreA === totalScoreB) {
        if (gameA.createDate > gameB.createDate) {
          return 1;
        } else {
          return -1;
        }
      } else {
        return 1;
      }
    });
    setsummaryGamesMap([...summaryGamesMap]);
  };

  const handleFinish = (id: number) => {
    const indexDelete = livesGamesMap.findIndex((game) => game.id === id);
    livesGamesMap.splice(indexDelete, 1);

    setlivesGamesMap([...livesGamesMap]);
  };

  return (
    <>
      <BoardComponent
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onFinish={handleFinish}
        liveGames={livesGamesMap}
        summaryGames={summaryGamesMap}
      />
    </>
  );
};
