import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextDisplay from "./TextDisplay";

//Grouping
describe("TextDisplay components", () => {
  test("renders Hello worlds h1 tag", () => {
    render(<TextDisplay />);

    const helloWorldElement = screen.getByText("Hello World !");

    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders Hello worlds h1 tag", () => {
    // Arrange
    render(<TextDisplay />);

    // Act

    //Assert
    const outputElement = screen.getByText("How are you !");

    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed Text' if the button was cliced", async () => {
    //Arange
    render(<TextDisplay />);

    //Act
    const buttonElement = screen.getByRole("button");

    await userEvent.click(buttonElement);

    //Assert

    const outputElement = screen.getByText("WhatSapP nIgGas !",{exact:false});
    expect(outputElement).toBeInTheDocument();
  });
});
