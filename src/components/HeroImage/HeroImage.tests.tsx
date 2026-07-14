import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import HeroImage from "./HeroImage";

test("hero image is visible", () => {
  render(<HeroImage title="Welcome" />);
  expect(screen.getByText("Welcome")).toBeInTheDocument();
});

test("hero background changes when disabled", () => {
  const { container } = render(<HeroImage title="Welcome" disabled={true} />);
  const hero = container.firstChild;
  expect(hero).toHaveStyleRule("background-color", "#ccc");
});
