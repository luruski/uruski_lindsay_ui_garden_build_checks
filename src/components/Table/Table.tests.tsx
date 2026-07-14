import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Table from "./Table";

test("table is visible", () => {
  render(<Table headers={["Name"]} rows={[["Lindsay"]]} />);
  expect(screen.getByText("Name")).toBeInTheDocument();
});

test("table background changes when disabled", () => {
  const { container } = render(<Table disabled={true} />);
  const table = container.firstChild;
  expect(table).toHaveStyleRule("background-color", "#eee");
});
