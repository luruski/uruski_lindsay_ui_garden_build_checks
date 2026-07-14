import Label from "./Label";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: { color: { control: "color" }, disabled: { control: "boolean" } },
};

export const DefaultStory = {
  args: { text: "My Label", color: "#333", disabled: false },
};
export const DisabledStory = {
  args: { text: "Disabled Label", disabled: true },
};
