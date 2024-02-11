import { Meta, StoryObj } from "@storybook/react";
import Sidepanel, {SidepanelRow, SidepanelElement, SidepanelHeader} from "../Sidepanel/index";
import React from "react";

const meta: Meta<typeof Sidepanel> = {
  component: Sidepanel,
  title: "Sidepanel",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Sidepanel>;

export const Default: Story = (args: object) => (
    <Sidepanel {...args}>
        <SidepanelRow>
            <SidepanelHeader>Heder</SidepanelHeader>
            <SidepanelElement>Element</SidepanelElement>
        </SidepanelRow>
    </Sidepanel>
)

