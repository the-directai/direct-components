type FooterProps = {
    children: ReactChildren
}

function Footer({children, ...props}: FooterProps) {
    return (
        <div {...props}>{children}</div>
    );
}

export default Footer;
