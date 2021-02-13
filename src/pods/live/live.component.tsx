import React from "react";
import { Game } from "./game.vm";

interface Props {
  onUpdate: (id: number, homeScore: number, awayScore: number) => void;
  onFinish: (id: number) => void;
  liveGames: Array<Game>;
}

export const LiveComponent: React.FunctionComponent<Props> = (props) => {
  const { onUpdate, onFinish, liveGames } = props;

  const [showUpdate, setshowUpdate] = React.useState<number>(0);
  const [homeScore, sethomeScore] = React.useState<number>(0);
  const [awayScore, setawayScore] = React.useState<number>(0);

  const handleChangeHomeScore = (event) => {
    sethomeScore(parseInt(event.target.value));
  };

  const handleChangeAwayScore = (event) => {
    setawayScore(parseInt(event.target.value));
  };

  const handleSubmit = (event, id: number) => {
    event.preventDefault();
    onUpdate(id, homeScore, awayScore);
    setshowUpdate(0);
  };

  const handleUpdate = (id: number, homeScore: number, awayScore: number) => {
    setshowUpdate(id);
    sethomeScore(homeScore);
    setawayScore(awayScore);
  };

  const handleFinish = (id: number) => {
    setshowUpdate(id);
    onFinish(id);
  };

  const handleCancel = (event) => {
    setshowUpdate(0);
  };

  return (
    <>
      <ul>
        {liveGames.map((game, index) =>
          showUpdate === game.id ? (
            <li key={game.id}>
              <form onSubmit={(e) => handleSubmit(e, game.id)}>
                <label htmlFor="homeUpdate">{game.homeTeam}</label>
                <input
                  type="number"
                  id="homeUpdate"
                  name="homeUpdate"
                  value={homeScore}
                  onChange={handleChangeHomeScore}
                />
                <label htmlFor="awayUpdate">{game.awayTeam}</label>
                <input
                  type="number"
                  id="awayUpdate"
                  name="awayUpdate"
                  value={awayScore}
                  onChange={handleChangeAwayScore}
                />
                <input type="submit" value="Update game" />
              </form>
              <button name="cancel" onClick={handleCancel}>
                Cancel
              </button>
            </li>
          ) : (
            <li key={game.id}>
              {game.homeTeam} {game.homeScore} - {game.awayTeam}{" "}
              {game.awayScore}{" "}
              <button
                name="update"
                onClick={() =>
                  handleUpdate(game.id, game.homeScore, game.awayScore)
                }
              >
                Update game
              </button>{" "}
              <button name="finish" onClick={() => handleFinish(game.id)}>
                Finish game
              </button>
            </li>
          )
        )}
      </ul>
    </>
  );
};
