import { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "Button",
    argTypes: {},
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = (args: object) => <Button data-testId="Button-id" {...args} />;

Default.args = {
    disabled: false,
    children: "Primary",
};

export const Secondary: Story = (args: object) => <Button data-testId="Button-id" {...args} />;

Secondary.args = {
    disabled: false,
    secondary: true,
    children: "Secondary",
};

export const Disabled: Story = (args: object) => <Button data-testId="Button-id" {...args} />;

Disabled.args = {
    disabled: true,
    secondary: false,
    children: "Can't write there",
};
