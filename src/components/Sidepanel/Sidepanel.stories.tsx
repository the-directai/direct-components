import { Meta, StoryObj } from "@storybook/react";
import Sidepanel, {SidepanelRow, SidepanelElement, SidepanelHeader, SidepanelLogo} from "../Sidepanel/index";
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
            <SidepanelLogo>DTrack</SidepanelLogo>
        </SidepanelRow>
        <SidepanelRow>
            <hr></hr>
        </SidepanelRow>
        <SidepanelRow>
            <SidepanelHeader>Heder</SidepanelHeader>
            <SidepanelElement>Element</SidepanelElement>
        </SidepanelRow>
        <SidepanelRow>
            <SidepanelHeader>Heder 2</SidepanelHeader>
            <SidepanelElement>Element 2</SidepanelElement>
        </SidepanelRow>
    </Sidepanel>
)

Default.args = {};

