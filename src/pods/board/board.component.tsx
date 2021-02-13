import React from "react";
import { StartContainer } from "pods/start";
import { LiveContainer } from "pods/live";
import { Game } from "./game.vm";

interface Props {
  onCreate: (homeTeam: string, awayTeam: string) => void;
  liveGames: Array<Game>;
}

export const BoardComponent: React.FunctionComponent<Props> = (props) => {
  const { onCreate, liveGames } = props;
  return (
    <>
      <StartContainer onCreate={onCreate} />
      <LiveContainer liveGames={liveGames} />
    </>
  );
};
