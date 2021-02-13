import * as React from "react";
import { render, screen } from "@testing-library/react";
import { SummaryComponent } from "./summary.component";

describe("pods/summary/summary.component specs", () => {
  it("should display listitem ", () => {
    // Arrange
    const summaryGames = [
      {
        id: 1,
        homeTeam: "Home team test",
        homeScore: 0,
        awayTeam: "Away team test",
        awayScore: 0,
        createDate: 1234,
      },
    ];

    // Act
    render(<SummaryComponent summaryGames={summaryGames} />);

    const game = screen.getByRole("listitem");

    // Assert
    expect(game).toBeInTheDocument();
  });
});
