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

  return (
    <>
      <BoardComponent onCreate={handleCreate} liveGames={livesGamesMap} />
    </>
  );
};
