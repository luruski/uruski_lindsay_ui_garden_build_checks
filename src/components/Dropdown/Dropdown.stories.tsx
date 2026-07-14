import React from "react";
import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const DefaultStory = {
  args: { options: ["Option 1", "Option 2", "Option 3"], disabled: false },
};
export const DisabledStory = {
  args: { options: ["Option 1", "Option 2"], disabled: true },
};
