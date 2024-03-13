import { screen, render } from "@testing-library/react";
import App from "./App";

test("renders learn react h1 tag", () => {
  render(<App />);

  const titleElement = screen.getByText(/Learn Reactt/i);

  expect(titleElement).toBeInTheDocument();
});
