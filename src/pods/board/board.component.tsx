import React from "react";
import { StartContainer } from "pods/start";

interface Props {
  onCreate: () => void;
}

export const BoardComponent: React.FunctionComponent<Props> = (props) => {
  const { onCreate } = props;
  return (
    <>
      <StartContainer onCreate={onCreate} />
    </>
  );
};
