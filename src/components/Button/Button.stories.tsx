import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export const DefaultStory = {
  args: { label: "Click me", backgroundColor: "#6200ea", disabled: false },
};
export const DisabledStory = { args: { label: "Disabled", disabled: true } };
