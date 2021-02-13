import React from "react";
import { SummaryComponent } from "./summary.component";
import { Game } from "./game.vm";

interface Props {
  summaryGames: Array<Game>;
}

export const SummaryContainer: React.FunctionComponent<Props> = (props) => {
  const { summaryGames } = props;
  return (
    <>
      {summaryGames.length > 0 && (
        <div>
          <h1>Summary games</h1>
          <SummaryComponent summaryGames={summaryGames} />
        </div>
      )}
    </>
  );
};
