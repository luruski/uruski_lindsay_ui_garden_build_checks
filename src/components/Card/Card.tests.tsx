import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Card from "./Card";

test("card is visible", () => {
  render(<Card title="My Card" />);
  expect(screen.getByText("My Card")).toBeInTheDocument();
});

test("card background changes when disabled", () => {
  const { container } = render(<Card title="My Card" disabled={true} />);
  const card = container.firstChild;
  expect(card).toHaveStyleRule("background-color", "#eee");
});
