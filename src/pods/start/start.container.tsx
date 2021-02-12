import React from "react";
import { StartComponent } from "./start.component";
import { CreateComponent } from "pods/start/create";

interface Props {
  onCreate: (homeTeam: string, awayTeam: string) => void;
}

export const StartContainer: React.FunctionComponent<Props> = (props) => {
  const { onCreate } = props;
  const [showCreateGame, setshowCreateGame] = React.useState<boolean>(false);

  const handleStart = () => {
    setshowCreateGame(!showCreateGame);
  };

  const handleCreate = (homeTeam: string, awayTeam: string) => {
    setshowCreateGame(!showCreateGame);
    onCreate(homeTeam, awayTeam);
  };

  return (
    <>
      <StartComponent onStart={handleStart} showStart={showCreateGame} />
      {showCreateGame && <CreateComponent onCreate={handleCreate} />}
    </>
  );
};
