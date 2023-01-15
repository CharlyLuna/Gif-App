import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("GifGrid tests", () => {
  const category = "the office";

  test("should show the loading in the start", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText(category));
    expect(screen.getByText("Loading..."));
  });

  test("should show the items when the useFetchGifs loads the images", () => {
    const gifs = [
      {
        id: "ADBS",
        title: "The office img1",
        url: "https://the-office/img.jpg",
      },
      {
        id: "AD24",
        title: "The office img2",
        url: "https://the-office/img2.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
