import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Dropdown from "./Dropdown";

test("dropdown is visible", () => {
  render(<Dropdown options={["Option 1", "Option 2"]} />);
  expect(screen.getByText("Option 1")).toBeInTheDocument();
});

test("dropdown background changes when disabled", () => {
  const { container } = render(<Dropdown disabled={true} />);
  const select = container.firstChild;
  expect(select).toHaveStyleRule("background-color", "#eee");
});
