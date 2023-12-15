import {Meta, StoryObj} from "@storybook/react";
import Footer, {FooterSection, FooterSectionHeader, FooterSectionElement, FooterColumn, FooterMain, FooterBottom, FooterAdditionalText, FooterCaption, FooterCaptionElement} from "./index";
import {BrowserRouter} from "react-router-dom";
import React from "react";

const meta: Meta<typeof Footer> = {
    component: Footer,
    title: "Footer",
    argTypes: {},
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = (args: object) => (
        <BrowserRouter>
            <Footer {...args} >
                <FooterMain>
                    <FooterColumn>
                        <FooterSection>
                            <FooterSectionHeader>
                            Get deeper into DirectAI
                            </FooterSectionHeader>
                            <FooterSectionElement link={"https://mylink.com"}>
                                About
                            </FooterSectionElement>
                            <FooterSectionElement link={"https://mylink.com"}>
                                System overview
                            </FooterSectionElement>
                            <FooterSectionElement link={"https://mylink.com"}>
                                Industry needs vs DirectAI
                            </FooterSectionElement>
                        </FooterSection>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterSection>
                            <FooterSectionHeader>
                                Account
                            </FooterSectionHeader>
                            <FooterSectionElement link={"https://mylink.com"}>
                            Manage your account in D-ID
                            </FooterSectionElement>
                            <FooterSectionHeader>
                                Sales
                            </FooterSectionHeader>
                            <FooterSectionElement link={"https://mylink.com"}>
                                Get DirectAI
                            </FooterSectionElement>
                            <FooterSectionElement link={"https://mylink.com"}>
                                Get introduction
                            </FooterSectionElement>
                        </FooterSection>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterSection>
                            <FooterSectionHeader>
                                For freight forwarding
                            </FooterSectionHeader>
                            <FooterSectionElement link={"https://mylink.com"}>
                                DTrack TMS overview
                            </FooterSectionElement>
                            <FooterSectionElement link={"https://mylink.com"}>
                                Fit DTrack for you
                            </FooterSectionElement>
                            <FooterSectionHeader>
                                For warehouse management
                            </FooterSectionHeader>
                            <FooterSectionElement link={"https://mylink.com"}>
                                DStore WMS overview
                            </FooterSectionElement>
                            <FooterSectionElement link={"https://mylink.com"}>
                                Fit DStore for you
                            </FooterSectionElement>
                        </FooterSection>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterSection>
                            <FooterSectionHeader>
                                For customers management and sales
                            </FooterSectionHeader>
                            <FooterSectionElement link={"https://mylink.com"}>
                                DStore CRM overview
                            </FooterSectionElement>
                            <FooterSectionElement link={"https://mylink.com"}>
                                Fit DStore for you
                            </FooterSectionElement>
                            <FooterSectionHeader link={"https://mylink.com"}>
                                For employees management
                            </FooterSectionHeader>
                            <FooterSectionElement link={"https://mylink.com"}>
                                DFlow HRM overview
                            </FooterSectionElement>
                            <FooterSectionElement link={"https://mylink.com"}>
                                Fit DFlow for you
                            </FooterSectionElement>
                        </FooterSection>
                    </FooterColumn>
                </FooterMain>
                <FooterBottom>
                    <FooterAdditionalText link={"https://mylink.com"}>
                        With any problem feel free to get in touch with us at support@directai.pl
                    </FooterAdditionalText>
                    <FooterCaption>
                        <FooterCaptionElement>
                            Copyright © 2023 DirectAI. All rights reserved.
                        </FooterCaptionElement>
                        {/* <FooterCaptionElement>
                            <hr />
                        </FooterCaptionElement> */}
                        <FooterCaptionElement link={"https://mylink.com"}>
                            Privacy Policy
                        </FooterCaptionElement>
                        <FooterCaptionElement link={"https://mylink.com"}>
                            Terms of use
                        </FooterCaptionElement>
                        <FooterCaptionElement link={"https://mylink.com"}>
                            Site map
                        </FooterCaptionElement>
                    </FooterCaption>
                </FooterBottom>
            </Footer>
        </BrowserRouter>

);

Default.args = {
};