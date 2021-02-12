import * as React from "react";
import { render, screen } from "@testing-library/react";
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
});
