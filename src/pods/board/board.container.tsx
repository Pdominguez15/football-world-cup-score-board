import React from "react";
import { BoardComponent } from "./board.component";
import { Game, createEmptyGame } from "./game.vm";

export const BoardContainer: React.FunctionComponent = () => {
  const [livesGamesMap, setlivesGamesMap] = React.useState<Array<Game>>(
    new Array<Game>()
  );

  const handleCreate = (homeTeam: string, awayTeam: string) => {
    const newGame = createEmptyGame(homeTeam, awayTeam);
    setlivesGamesMap([...livesGamesMap, newGame]);
  };

  const handleUpdate = (id: number, homeScore: number, awayScore: number) => {
    livesGamesMap.find((game) => {
      if (game.id === id) {
        game.homeScore = homeScore;
        game.awayScore = awayScore;
      }
    });
    setlivesGamesMap([...livesGamesMap]);
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
      />
    </>
  );
};
