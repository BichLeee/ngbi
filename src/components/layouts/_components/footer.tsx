import { Flex } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Typography } from "components/elements";
import { LogoInstagram, LogoLinkedin, LogoMail, LogoPhone } from "assets/svgs";

export const Footer = () => {
    return (
        <Container>
            <Flex align="center" justify="center" gap={16}>
                <ContactItem to="https://www.linkedin.com/in/bích-lê-sophie">
                    <LogoLinkedin />
                </ContactItem>
                <ContactItem to="https://www.instagram.com/biccccc_">
                    <LogoInstagram />
                </ContactItem>
                <ContactItem to="tel:+84774777162">
                    <LogoPhone />
                </ContactItem>
                <ContactItem to="mailto:bich1042002@gmail.com">
                    <LogoMail />
                </ContactItem>
            </Flex>
            <Flex align="center" justify="center" gap={30}>
                <NavItem to="/">Overview</NavItem>
                <NavItem to="/projects">Detail</NavItem>
            </Flex>
            <Typography variant="body1" align="center">
                ngbi ©. Website created with ❤️ by NgocBich
            </Typography>
        </Container>
    );
};

const Container = styled.footer`
    width: 100%;
    height: 200px;
    background: #000;
    position: fixed;
    bottom: 0;
    z-index: 0;
    padding-block: 40px;
    display: flex;
    flex-flow: column;
    gap: 30px;
`;

const NavItem = styled(Link)`
    font-size: 12px;
    font-weight: 400;

    &:hover {
        color: #ffb4dc;
    }
`;

const ContactItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 12px;
    border-radius: 50%;
    border: 2px solid #c9c9c9;
    opacity: 0.6;

    &:hover {
        color: #ffb4dc !important;
        border-color: #ffb4dc !important;
        opacity: 1;
    }
`;
