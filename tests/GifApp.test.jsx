import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GifApp } from "../src/GifApp";

describe("GifApp tests", () => {
  test("should add the new category and show the images", async () => {
    render(<GifApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "jhin" } });
    fireEvent.submit(form);

    await waitFor(() =>
      expect(screen.getAllByRole("img").length).toBeGreaterThan(0)
    );
  });

  test("should not add a category if it is repeated", () => {
    render(<GifApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "jhin" } });
    fireEvent.submit(form);
    fireEvent.input(input, { target: { value: "jhin" } });
    fireEvent.submit(form);

    expect(screen.getAllByText("jhin").length).toBe(1);
  });

  test("should reset the categories and erase all images", () => {
    render(<GifApp />);
    const resetBtn = screen.getByRole("button");
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "jhin" } });
    fireEvent.submit(form);

    fireEvent.click(resetBtn);

    expect(
      screen.getAllByRole("heading").filter((e) => e.innerHTML === "jhin")
        .length
    ).toBe(0);
  });
});
