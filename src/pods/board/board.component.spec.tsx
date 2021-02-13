import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BoardComponent } from "./board.component";

describe("pods/board/board.component specs", () => {
  it("should display a game when it is created", () => {
    // Arrange
    const onCreate = (homeTeam: string, awayTeam: string) => {};
    const onUpdate = (id: number, homeScore: number, awayScore: number) => {};
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
    const onFinish = (id: number) => {};
    // Act
    render(
      <BoardComponent
        onCreate={onCreate}
        onUpdate={onUpdate}
        onFinish={onFinish}
        liveGames={liveGames}
      />
    );

    const game = screen.getByRole("listitem");
    // Assert
    expect(game).toBeInTheDocument();
    expect(game).toContainHTML(
      '<li>Home team test 0 - Away team test 0 <button name="update">Update game</button> <button name="finish">Finish game</button></li>'
    );
  });

  it("should display a updated game when it is updated", () => {
    // Arrange
    const onCreate = (homeTeam: string, awayTeam: string) => {};
    const onUpdate = (id: number, homeScore: number, awayScore: number) => {
      liveGames.find((game) => {
        if (game.id === id) {
          game.homeScore = homeScore;
          game.awayScore = awayScore;
        }
      });
    };
    const onFinish = (id: number) => {};
    let liveGames = [
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
    render(
      <BoardComponent
        onCreate={onCreate}
        onUpdate={onUpdate}
        onFinish={onFinish}
        liveGames={liveGames}
      />
    );

    const updateGame = screen.getByRole("button", { name: /Update game/ });
    userEvent.click(updateGame);

    const scoreHome = screen.getByRole("spinbutton", {
      name: /Home team test/,
    });
    userEvent.type(scoreHome, "2");

    const scoreAway = screen.getByRole("spinbutton", {
      name: /Away team test/,
    });
    userEvent.type(scoreAway, "3");

    const updateGame2 = screen.getByRole("button", { name: /Update game/ });
    userEvent.click(updateGame2);

    const game = screen.getByRole("listitem");

    // Assert
    expect(game).toBeInTheDocument();
    expect(game).toContainHTML(
      '<li>Home team test 2 - Away team test 3 <button name="update">Update game</button> <button name="finish">Finish game</button></li>'
    );
  });

  it("should not display game when it is finished", () => {
    // Arrange
    const onCreate = (homeTeam: string, awayTeam: string) => {};
    const onUpdate = (id: number, homeScore: number, awayScore: number) => {};
    const onFinish = (id: number) => {
      const indexDelete = liveGames.findIndex((game) => game.id === id);
      liveGames.splice(indexDelete, 1);
    };
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
    // Act
    render(
      <BoardComponent
        onCreate={onCreate}
        onUpdate={onUpdate}
        onFinish={onFinish}
        liveGames={liveGames}
      />
    );

    const finishGame = screen.getByRole("button", { name: /Finish game/ });
    userEvent.click(finishGame);
    const game = screen.queryByRole("listitem");

    // Assert
    expect(game).not.toBeInTheDocument();
  });
});
