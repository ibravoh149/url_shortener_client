import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../../Pages/Home.tsx";

describe("App", () => {
  it("renders headline", async () => {
    render(<App />);
    const text = await screen.queryByText(
      "Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience."
    );
    expect(text).not.toBeNull();
  });
});
