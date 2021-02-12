import React from "react";
import { BoardComponent } from "./board.component";

export const BoardContainer: React.FunctionComponent = () => {
  const handleCreate = () => {};

  return (
    <>
      <BoardComponent onCreate={handleCreate} />
    </>
  );
};
