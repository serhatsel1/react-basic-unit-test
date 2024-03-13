import { screen, render } from "@testing-library/react";
import Async from "./Async";

describe("Async components testing", () => {
  test("renders posts id request succeeds", async () => {
    //Arrange

    render(<Async />);

    //Act

    //Assert

    const listsItemElements = await screen.findAllByRole("listitem");
    expect(listsItemElements).not.toHaveLength(0);
    expect(listsItemElements).toHaveLength(100);
    //! expect(listsItemElements).toHaveLength(111);
  });
});
