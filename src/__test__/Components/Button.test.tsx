import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "../../Compoents";


describe("App", () => {
  it("it detects button with class name 'bg-primary'", async () => {
    render(<Button role="button" />)
    const primaryButton = screen.getByRole('button')
    expect(primaryButton).toHaveClass('bg-primary')
  });
});
