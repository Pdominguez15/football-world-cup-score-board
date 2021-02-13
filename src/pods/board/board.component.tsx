import React from "react";
import { StartContainer } from "pods/start";
import { LiveContainer } from "pods/live";
import { SummaryContainer } from "pods/summary";
import { Game } from "./game.vm";

interface Props {
  onCreate: (homeTeam: string, awayTeam: string) => void;
  onUpdate: (id: number, homeScore: number, awayScore: number) => void;
  onFinish: (id: number) => void;
  liveGames: Array<Game>;
  summaryGames: Array<Game>;
}

export const BoardComponent: React.FunctionComponent<Props> = (props) => {
  const { onCreate, onFinish, onUpdate, liveGames, summaryGames } = props;
  return (
    <>
      <StartContainer onCreate={onCreate} />
      <LiveContainer
        onUpdate={onUpdate}
        onFinish={onFinish}
        liveGames={liveGames}
      />
      <SummaryContainer summaryGames={summaryGames} />
    </>
  );
};
