import React from "react";
import { Game } from "./game.vm";
interface Props {
  liveGames: Array<Game>;
}

export const LiveComponent: React.FunctionComponent<Props> = (props) => {
  const { liveGames } = props;

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
    setshowUpdate(0);
  };

  const handleUpdate = () => {};

  const handleFinish = () => {};

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
              <button name="update" onClick={() => handleUpdate()}>
                Update game
              </button>{" "}
              <button name="finish" onClick={() => handleFinish()}>
                Finish game
              </button>
            </li>
          )
        )}
      </ul>
    </>
  );
};
