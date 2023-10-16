import { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

const meta: Meta<typeof Input> = {
    component: Input,
    title: "Input",
    argTypes: {},
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = (args: any) => <Input data-testId="InputField-id" {...args} />;

Default.args = {
    error: false,
    disabled: false,
    placeholder: "Primary",
    defaultValue: "",
};

export const Disabled: Story = (args: any) => <Input data-testId="InputField-id" {...args} />;

Disabled.args = {
    error: false,
    disabled: true,
    placeholder: "Can't write there",
    defaultValue: "",
};

export const Error: Story = (args: any) => <Input data-testId="InputField-id" {...args} />;

Error.args = {
    error: true,
    disabled: false,
    placeholder: "Error",
    defaultValue: "",
};
