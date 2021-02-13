import React from "react";
import { LiveComponent } from "./live.component";
import { Game } from "./game.vm";
interface Props {
  liveGames: Array<Game>;
}
export const LiveContainer: React.FunctionComponent<Props> = (props) => {
  const { liveGames } = props;
  return (
    <>
      {liveGames.length > 0 && (
        <div>
          <h1>Live games</h1>
          <LiveComponent liveGames={liveGames} />
        </div>
      )}
    </>
  );
};
