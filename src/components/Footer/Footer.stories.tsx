import {Meta, StoryObj} from "@storybook/react";
import Footer, {FooterSection, FooterSectionHeader, FooterSectionElement, FooterColumn, FooterMain, FooterBottom, FooterAdditionalText, FooterCaption, FooterCaptionElement} from "./index";
import {BrowserRouter} from "react-router-dom";


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
                            <FooterSectionHeader link={"https://mylink.com"}>
                                Example section
                            </FooterSectionHeader>
                            <FooterSectionElement link={"https://mylink.com"}>
                                link 1
                            </FooterSectionElement>
                            <FooterSectionElement link={"https://mylink.com"}>
                                link 2
                            </FooterSectionElement>
                            <FooterSectionElement link={"https://mylink.com"}>
                                link 3
                            </FooterSectionElement>
                        </FooterSection>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterSection>
                            <FooterSectionHeader link={"https://mylink.com"}>
                                Example section 2
                            </FooterSectionHeader>
                            <FooterSectionElement link={"https://mylink.com"}>
                                link 1
                            </FooterSectionElement>
                            <FooterSectionElement link={"https://mylink.com"}>
                                link 2
                            </FooterSectionElement>
                            <FooterSectionElement link={"https://mylink.com"}>
                                link 3
                            </FooterSectionElement>
                        </FooterSection>
                    </FooterColumn>
                </FooterMain>
                <FooterBottom>
                    <FooterAdditionalText link={"https://mylink.com"}>
                        Text us or sth
                    </FooterAdditionalText>
                    <FooterCaption>
                        <FooterCaptionElement link={"https://mylink.com"}>
                            Copyright
                        </FooterCaptionElement>
                        <FooterCaptionElement link={"https://mylink.com"}>
                            Cool link
                        </FooterCaptionElement>
                        <FooterCaptionElement link={"https://mylink.com"}>
                            Cool link 2
                        </FooterCaptionElement>
                    </FooterCaption>
                </FooterBottom>
            </Footer>
        </BrowserRouter>

);

Default.args = {
};