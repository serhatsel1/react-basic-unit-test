import { screen, render } from "@testing-library/react";
import TextDisplay from "./TextDisplay";
//Grouping
describe("TextDisplay components", () => {
  test("renders Hello worlds h1 tag", () => {
    render(<TextDisplay />);

    const helloWorldElement = screen.getByText("Hello World !");

    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders Hello worlds h1 tag", () => {
    render(<TextDisplay />);

    const howAreYouElement = screen.getByText("How are you !");

    expect(howAreYouElement).toBeInTheDocument();
  });
});
