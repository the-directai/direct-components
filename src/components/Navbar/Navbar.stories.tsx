import { Meta, StoryObj } from "@storybook/react";
import Navbar from "./index";

const meta: Meta<typeof Navbar> = {
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
    },
}

export default meta;
type Story = StoryObj<typeof Navbar>

export const Default: Story = {
    render: () => <Navbar></Navbar>
}