import React from "react";
import { Game } from "./game.vm";

interface Props {
  summaryGames: Array<Game>;
}

export const SummaryComponent: React.FunctionComponent<Props> = (props) => {
  const { summaryGames } = props;

  return (
    <>
      <ul>
        {summaryGames.map((game, index) => (
          <li key={game.id}>
            {game.homeTeam} {game.homeScore} - {game.awayTeam} {game.awayScore}
          </li>
        ))}
      </ul>
    </>
  );
};
