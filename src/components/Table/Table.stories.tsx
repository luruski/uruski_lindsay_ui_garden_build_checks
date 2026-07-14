import Table from "./Table";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const DefaultStory = {
  args: {
    headers: ["Name", "Age"],
    rows: [["Lindsay", "25"]],
    disabled: false,
  },
};
export const DisabledStory = {
  args: { headers: ["Name", "Age"], rows: [["Lindsay", "25"]], disabled: true },
};
