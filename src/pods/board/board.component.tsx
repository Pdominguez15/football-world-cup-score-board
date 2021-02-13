import React from "react";
import { StartContainer } from "pods/start";
import { LiveContainer } from "pods/live";
import { Game } from "./game.vm";

interface Props {
  onCreate: (homeTeam: string, awayTeam: string) => void;
  onUpdate: (id: number, homeScore: number, awayScore: number) => void;
  onFinish: (id: number) => void;
  liveGames: Array<Game>;
}

export const BoardComponent: React.FunctionComponent<Props> = (props) => {
  const { onCreate, onFinish, onUpdate, liveGames } = props;
  return (
    <>
      <StartContainer onCreate={onCreate} />
      <LiveContainer
        onUpdate={onUpdate}
        onFinish={onFinish}
        liveGames={liveGames}
      />
    </>
  );
};
