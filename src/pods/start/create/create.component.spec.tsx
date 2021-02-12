import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { CreateComponent } from "./create.component";

describe("pods/start/create/create.component specs", () => {
  it("should display 2 labels, 2 input and 1 button", () => {
    // Arrange

    // Act
    render(<CreateComponent onCreate={() => {}} />);

    const label1 = screen.getByLabelText("Home team:");
    const label2 = screen.getByLabelText("Away team:");
    const textbox = screen.getAllByRole("textbox");
    const button = screen.getAllByRole("button");

    // Assert
    expect(label1).toBeInTheDocument();
    expect(label2).toBeInTheDocument();
    expect(textbox).toHaveLength(2);
    expect(button).toHaveLength(1);
  });
});
