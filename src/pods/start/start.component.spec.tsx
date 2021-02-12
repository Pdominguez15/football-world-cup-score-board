import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StartComponent } from "./start.component";

describe("pods/start/start.component specs", () => {
  it("should display title and button", () => {
    // Arrange
    const mockFN = jest.fn();
    const showStart = true;
    // Act
    render(<StartComponent onStart={mockFN} showStart={showStart} />);

    const title = screen.getByRole("heading");
    const button = screen.getByRole("button");

    // Assert
    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it("should call handleStart property when it click on 'Start game' button", () => {
    // Arrange
    const props = {
      onStart: jest.fn(),
    };
    // Act
    render(<StartComponent {...props} showStart={false} />);

    const startGameButton = screen.getByRole("button", {
      name: /Start game/,
    });
    userEvent.click(startGameButton);

    // Assert
    waitFor(() => {
      expect(props.onStart).toHaveBeenCalled();
    });
  });
  it("should call handleStart property when it click on 'Cancel' button", () => {
    // Arrange
    const props = {
      onStart: jest.fn(),
    };
    // Act
    render(<StartComponent {...props} showStart={true} />);

    const cancelGameButton = screen.getByRole("button", {
      name: /Cancel/,
    });
    userEvent.click(cancelGameButton);

    // Assert
    waitFor(() => {
      expect(props.onStart).toHaveBeenCalled();
    });
  });
});
