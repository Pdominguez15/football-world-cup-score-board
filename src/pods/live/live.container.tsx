import React from "react";
import { LiveComponent } from "./live.component";
import { Game } from "./game.vm";
interface Props {
  onUpdate: (id: number, homeScore: number, awayScore: number) => void;
  onFinish: (id: number) => void;
  liveGames: Array<Game>;
}
export const LiveContainer: React.FunctionComponent<Props> = (props) => {
  const { onUpdate, onFinish, liveGames } = props;

  return (
    <>
      {liveGames.length > 0 && (
        <div>
          <h1>Live games</h1>
          <LiveComponent
            liveGames={liveGames}
            onFinish={onFinish}
            onUpdate={onUpdate}
          />
        </div>
      )}
    </>
  );
};
