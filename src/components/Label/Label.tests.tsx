import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Label from "./Label";

test("label is visible", () => {
  render(<Label text="My Label" />);
  expect(screen.getByText("My Label")).toBeInTheDocument();
});

test("label color changes when disabled", () => {
  const { container } = render(<Label text="My Label" disabled={true} />);
  const label = container.firstChild;
  expect(label).toHaveStyleRule("color", "#aaa");
});
