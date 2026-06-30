import styled from "styled-components";

export const Footer = () => {
    return (
        <Container className="app-footer">
            <FooterCopy className="footer-copy">ng&apos;bi © 2024</FooterCopy>
            <FooterLinks className="footer-links">
                {["GitHub", "LinkedIn", "Email"].map((l) => (
                    <FooterLink key={l} className="footer-link">
                        {l}
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
const FooterLink = styled.button`
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
