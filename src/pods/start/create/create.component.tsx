import React from "react";

interface Props {
  onCreate: (homeTeam: string, awayTeam: string) => void;
}

export const CreateComponent: React.FunctionComponent<Props> = (props) => {
  const { onCreate } = props;
  const [homeTeam, sethomeTeam] = React.useState<string>("");
  const [awayTeam, setawayTeam] = React.useState<string>("");
  const handleChangeHomeTeam = (event) => {
    sethomeTeam(event.target.value);
  };
  const handleChangeAwayTeam = (event) => {
    setawayTeam(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(homeTeam, awayTeam);
    sethomeTeam("");
    setawayTeam("");
  };
  return (
    <>
      <div>
        <br />
        <h2>Create game</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="home">Home team:</label>
          <input
            type="text"
            id="home"
            name="home"
            value={homeTeam}
            onChange={handleChangeHomeTeam}
          />{" "}
          <label htmlFor="away">Away team:</label>
          <input
            type="text"
            id="away"
            name="away"
            value={awayTeam}
            onChange={handleChangeAwayTeam}
          />{" "}
          <input type="submit" value="Create" />
        </form>
      </div>
    </>
  );
};
