import { Meta, StoryObj } from "@storybook/react";
import WidgetsMenu from "./index";

const meta: Meta<typeof WidgetsMenu> = {
    component: WidgetsMenu,
    title: "WidgetsMenu",
    argTypes: {},
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof WidgetsMenu>;

export const Default: Story = (args: object) => <WidgetsMenu data-testId="Button-id" {...args} />;

