import Text from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: { color: { control: "color" }, disabled: { control: "boolean" } },
};

export const DefaultStory = {
  args: { content: "Hello world", color: "#333", disabled: false },
};
export const DisabledStory = {
  args: { content: "Disabled text", disabled: true },
};
