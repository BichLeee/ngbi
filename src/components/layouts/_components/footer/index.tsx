import styled from "styled-components";

const CONTACT_LINKS = [
    { label: "GitHub", href: "https://github.com/BichLeee", tooltip: "View GitHub profile" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bích-lê-sophie", tooltip: "Connect on LinkedIn" },
    { label: "Email", href: "mailto:bich1042002@gmail.com", tooltip: "Send an email" }
];

export const Footer = () => {
    return (
        <Container className="app-footer">
            <FooterCopy className="footer-copy">ng&apos;bi © 2024</FooterCopy>
            <FooterLinks className="footer-links">
                {CONTACT_LINKS.map((l) => (
                    <FooterLink key={l.label} className="footer-link" href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                    </FooterLink>
                ))}
            </FooterLinks>
        </Container>
    );
};

const Container = styled.footer`
    background: var(--bg);
    border-top: 1px solid var(--border);
    padding: 32px var(--px);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const FooterCopy = styled.span`
    font-family: var(--font-mono);
    font-size: 11px;
    color: rgba(255, 255, 255, 0.16);
`;
const FooterLinks = styled.div`
    display: flex;
    gap: 28px;
`;
const FooterLink = styled.a`
    font-family: var(--font-mono);
    font-size: 11px;
    color: rgba(255, 255, 255, 0.26);
    cursor: pointer;
    background: none;
    border: none;
    transition: color 0.3s;
    &:hover {
        color: rgba(255, 255, 255, 0.65);
    }
`;
