import { render, screen } from "@testing-library/react";
import App from "../App";
import { describe, it, expect } from "vitest";

describe("App Component", () => {
  it("should render the app title in h1", () => {
    render(<App />);
    const button = screen.getByRole("button", {
      name: /Click me$/i,
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Click me$/);
  });
});