import React from "react";
import { StartComponent } from "./start.component";

export const StartContainer: React.FunctionComponent = () => {
  const [showCreateGame, setshowCreateGame] = React.useState<boolean>(false);
  const handleStart = () => {
    setshowCreateGame(!showCreateGame);
  };
  return (
    <>
      <StartComponent onStart={handleStart} showStart={showCreateGame} />
    </>
  );
};
