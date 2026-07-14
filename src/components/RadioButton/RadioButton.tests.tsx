import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import RadioButton from "./RadioButton";

test("radio button is visible", () => {
  render(<RadioButton label="Select me" />);
  expect(screen.getByText("Select me")).toBeInTheDocument();
});

test("radio button wrapper changes color when disabled", () => {
  const { container } = render(
    <RadioButton label="Select me" disabled={true} />
  );
  const wrapper = container.firstChild;
  expect(wrapper).toHaveStyleRule("color", "#aaa");
});
