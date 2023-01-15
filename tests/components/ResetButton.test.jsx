import { fireEvent, render, screen } from "@testing-library/react";
import { ResetButton } from "../../src/components";

describe("ResetButton tests", () => {
  test("should execute the function when the button is clicked", () => {
    const onReset = jest.fn();
    render(<ResetButton onReset={onReset} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(onReset).toHaveBeenCalled();
  });
});
