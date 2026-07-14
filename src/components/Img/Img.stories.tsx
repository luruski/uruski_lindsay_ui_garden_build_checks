import Img from "./Img";

export default {
  title: "Components/Img",
  component: Img,
  argTypes: { disabled: { control: "boolean" } },
};

export const DefaultStory = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "placeholder",
    disabled: false,
  },
};
export const DisabledStory = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "placeholder",
    disabled: true,
  },
};
