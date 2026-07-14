import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Text from "./Text";

test("text is visible", () => {
  render(<Text content="Hello world" />);
  expect(screen.getByText("Hello world")).toBeInTheDocument();
});

test("text color changes when disabled", () => {
  const { container } = render(<Text content="Hello world" disabled={true} />);
  const text = container.firstChild;
  expect(text).toHaveStyleRule("color", "#aaa");
});
