import React from "react";

interface Props {
  onStart: () => void;
  showStart: boolean;
}
export const StartComponent: React.FunctionComponent<Props> = (props) => {
  const { onStart, showStart } = props;

  return (
    <>
      <h1>Football World Cup Score Board</h1>
      {!showStart && <button onClick={onStart}>Start game</button>}
      {showStart && <button onClick={onStart}>Cancel</button>}
    </>
  );
};
