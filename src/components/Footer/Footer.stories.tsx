import {Meta, StoryObj} from "@storybook/react";
// tu dodac importy, po stworzeniu komponentow (komentarz usun przed pushem)
import Footer, {FooterSection, FooterSectionHeader} from "./index";


const meta: Meta<typeof Footer> = {
    component: Footer,
    title: "Footer",
    argTypes: {},
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = (args: object) => (
        <Footer {...args} >
            <FooterMain>
                <FooterColumn>
                    <FooterSection>
                        <FooterSectionHeader link={"https://mylink.com"}>
                            Example section
                        </FooterSectionHeader>
                        <FooterSectionElement link={"https://mylink.com"}>
                            Link 1
                        </FooterSectionElement>
                        <FooterSectionElement link={"https://mylink.com"}>
                            Link 2
                        </FooterSectionElement>
                        <FooterSectionElement link={"https://mylink.com"}>
                            Link 3
                        </FooterSectionElement>
                    </FooterSection>
                </FooterColumn>
                <FooterColumn>
                    <FooterSection>
                        <FooterSectionHeader link={"https://mylink.com"}>
                            Example section 2
                        </FooterSectionHeader link={"https://mylink.com"}>
                        <FooterSectionElement link={"https://mylink.com"}>
                            Link 1
                        </FooterSectionElement link={"https://mylink.com"}>
                        <FooterSectionElement link={"https://mylink.com"}>
                            Link 2
                        </FooterSectionElement>
                        <FooterSectionElement link={"https://mylink.com"}>
                            Link 3
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
);

Default.args = {
};