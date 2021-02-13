import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LiveComponent } from "./live.component";

describe("pods/live/live.component specs", () => {
  it("should display listitem with 2 button when it is create 1 game", () => {
    // Arrange
    const props = {
      onUpdate: jest.fn(),
      onFinish: jest.fn(),
      liveGames: [
        {
          id: 1,
          homeTeam: "Home team test",
          homeScore: 0,
          awayTeam: "Away team test",
          awayScore: 0,
          createDate: 1234,
        },
      ],
    };
    // Act
    render(<LiveComponent {...props} />);

    const game = screen.getByRole("listitem");
    const button = screen.getAllByRole("button");

    // Assert
    expect(game).toBeInTheDocument();
    expect(button).toHaveLength(2);
  });

  it("should call handleUpdate property when it click on 'Update game' button", () => {
    // Arrange
    const props = {
      onUpdate: jest.fn(),
      onFinish: jest.fn(),
      liveGames: [
        {
          id: 1,
          homeTeam: "Home team test",
          homeScore: 0,
          awayTeam: "Away team test",
          awayScore: 0,
          createDate: 1234,
        },
      ],
    };
    // Act
    render(<LiveComponent {...props} />);

    const updateGame = screen.getByRole("button", { name: /Update game/ });
    userEvent.click(updateGame);

    // Assert
    waitFor(() => {
      expect(props.onUpdate).toHaveBeenCalled();
    });
  });

  it("should call handleFinish property when it click on 'Finish game' button", () => {
    // Arrange
    const props = {
      onUpdate: jest.fn(),
      onFinish: jest.fn(),
      liveGames: [
        {
          id: 1,
          homeTeam: "Home team test",
          homeScore: 0,
          awayTeam: "Away team test",
          awayScore: 0,
          createDate: 1234,
        },
      ],
    };
    // Act
    render(<LiveComponent {...props} />);

    const finishGame = screen.getByRole("button", { name: /Finish game/ });
    userEvent.click(finishGame);

    // Assert
    waitFor(() => {
      expect(props.onFinish).toHaveBeenCalled();
    });
  });
});
