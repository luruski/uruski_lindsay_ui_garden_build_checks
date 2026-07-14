import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Button from "./Button";

test("button is visible", () => {
  render(<Button label="Click me" />);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});

test("button background changes when disabled", () => {
  const { container } = render(<Button label="Click me" disabled={true} />);
  const btn = container.firstChild;
  expect(btn).toHaveStyleRule("background-color", "#ccc");
});
