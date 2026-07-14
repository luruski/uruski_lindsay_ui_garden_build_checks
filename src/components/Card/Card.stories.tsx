import React from "react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const DefaultStory = {
  args: { title: "My Card", description: "Card description.", disabled: false },
};
export const DisabledStory = {
  args: { title: "My Card", description: "Card description.", disabled: true },
};
