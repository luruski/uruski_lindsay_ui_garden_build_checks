import RadioButton from "./RadioButton";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: { disabled: { control: "boolean" } },
};

export const DefaultStory = { args: { label: "Select me", disabled: false } };
export const DisabledStory = { args: { label: "Disabled", disabled: true } };
