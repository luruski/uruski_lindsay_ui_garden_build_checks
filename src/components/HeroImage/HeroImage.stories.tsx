import HeroImage from "./HeroImage";

export default {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const DefaultStory = {
  args: { title: "Welcome", subtitle: "Hero subtitle", disabled: false },
};
export const DisabledStory = {
  args: { title: "Welcome", subtitle: "Hero subtitle", disabled: true },
};
