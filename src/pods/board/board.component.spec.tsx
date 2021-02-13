import * as React from "react";
import { render, screen } from "@testing-library/react";
import { BoardComponent } from "./board.component";

describe("pods/board/board.component specs", () => {
  it("should display a game when it is created", () => {
    // Arrange
    const onCreate = (homeTeam: string, awayTeam: string) => {};
    const liveGames = [
      {
        id: 1,
        homeTeam: "Home team test",
        homeScore: 0,
        awayTeam: "Away team test",
        awayScore: 0,
        createDate: 1234,
      },
    ];
    const summaryGames = [];
    // Act
    render(<BoardComponent onCreate={onCreate} liveGames={liveGames} />);

    const game = screen.getByRole("listitem");
    // Assert
    expect(game).toBeInTheDocument();
    expect(game).toContainHTML(
      '<li>Home team test 0 - Away team test 0 <button name="update">Update game</button> <button name="finish">Finish game</button></li>'
    );
  });
});
