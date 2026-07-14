import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Img from "./Img";

test("img is visible", () => {
  render(<Img alt="test image" />);
  expect(screen.getByAltText("test image")).toBeInTheDocument();
});

test("img opacity changes when disabled", () => {
  const { container } = render(<Img alt="test image" disabled={true} />);
  const img = container.firstChild;
  expect(img).toHaveStyleRule("opacity", "0.4");
});
