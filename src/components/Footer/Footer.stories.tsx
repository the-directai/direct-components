import {Meta, StoryObj} from "@storybook/react";
import Footer, {FooterSection, FooterSectionHeader, FooterSectionElement, FooterColumn, FooterMain, FooterBottom, FooterAdditionalText, FooterCaption, FooterCaptionElement} from "./index";
import {Route, Router, Routes} from "react-router-dom";


const meta: Meta<typeof Footer> = {
    component: Footer,
    title: "Footer",
    argTypes: {},
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = (args: object) => (
        <Router location={undefined} navigator={undefined}>
            <Routes>
                <Route path="/" element= {
                    <Footer {...args} >
                        <FooterMain>
                            <FooterColumn>
                                <FooterSection>
                                    <FooterSectionHeader NavLink={"https://myNavLink.com"}>
                                        Example section
                                    </FooterSectionHeader>
                                    <FooterSectionElement NavLink={"https://myNavLink.com"}>
                                        NavLink 1
                                    </FooterSectionElement>
                                    <FooterSectionElement NavLink={"https://myNavLink.com"}>
                                        NavLink 2
                                    </FooterSectionElement>
                                    <FooterSectionElement NavLink={"https://myNavLink.com"}>
                                        NavLink 3
                                    </FooterSectionElement>
                                </FooterSection>
                            </FooterColumn>
                            <FooterColumn>
                                <FooterSection>
                                    <FooterSectionHeader NavLink={"https://myNavLink.com"}>
                                        Example section 2
                                    </FooterSectionHeader>
                                    <FooterSectionElement NavLink={"https://myNavLink.com"}>
                                        NavLink 1
                                    </FooterSectionElement>
                                    <FooterSectionElement NavLink={"https://myNavLink.com"}>
                                        NavLink 2
                                    </FooterSectionElement>
                                    <FooterSectionElement NavLink={"https://myNavLink.com"}>
                                        NavLink 3
                                    </FooterSectionElement>
                                </FooterSection>
                            </FooterColumn>
                        </FooterMain>
                        <FooterBottom>
                            <FooterAdditionalText NavLink={"https://myNavLink.com"}>
                                Text us or sth
                            </FooterAdditionalText>
                            <FooterCaption>
                                <FooterCaptionElement NavLink={"https://myNavLink.com"}>
                                    Copyright
                                </FooterCaptionElement>
                                <FooterCaptionElement NavLink={"https://myNavLink.com"}>
                                    Cool NavLink
                                </FooterCaptionElement>
                                <FooterCaptionElement NavLink={"https://myNavLink.com"}>
                                    Cool NavLink 2
                                </FooterCaptionElement>
                            </FooterCaption>
                        </FooterBottom>
                    </Footer>
                } />
            </Routes>
        </Router>

);

Default.args = {
};