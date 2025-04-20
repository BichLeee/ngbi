import React from "react";
import { Flex } from "antd";
import { Link, useLocation } from "react-router-dom";

import logo from "assets/images/logo.png";
import { LogoInstagram, LogoLinkedin, LogoMail, LogoPhone } from "assets/svgs";
import styled from "styled-components";

const ContactItem = ({ icon, link }: { icon: React.ReactNode; link: string }) => {
    return (
        <ContactItemWrapper to={link || "#"} target="_blank">
            <IconContainer>{icon}</IconContainer>
            <IconContainer $isHover>{icon}</IconContainer>
        </ContactItemWrapper>
    );
};

export const Header = () => {
    const { pathname } = useLocation();

    return (
        <Container>
            <Inner>
                <Link to="/">
                    <Logo src={logo} alt="logo" />
                </Link>
                <Nav>
                    <NavItem to="/" $active={pathname === "/"}>
                        Overview
                    </NavItem>
                    <NavItem to="/exp" $active={pathname === "/exp"}>
                        Experience
                    </NavItem>
                    <ContactGroup align="center" gap={16}>
                        <ContactItem icon={<LogoLinkedin />} link="https://www.linkedin.com/in/bích-lê-sophie" />
                        <ContactItem icon={<LogoInstagram />} link="https://www.instagram.com/biccccc_" />
                        <ContactItem icon={<LogoPhone />} link="tel:+84774777162" />
                        <ContactItem icon={<LogoMail />} link="mailto:bich1042002@gmail.com" />
                    </ContactGroup>
                </Nav>
            </Inner>
        </Container>
    );
};

export const Container = styled.header`
    width: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 0) 99%);
    backdrop-filter: blur(12px);
    background-color: transparent !important;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

export const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--max-width);
    padding: 0 var(--page-padding);
    width: 100%;
    margin: 0 auto;
    height: 85px;
`;

export const Logo = styled.img`
    height: 45px;

    @media screen and (max-width: 576px) {
        height: 35px;
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 40px;

    @media screen and (max-width: 768px) {
        gap: 20px;
    }
`;

export const NavItem = styled(Link)<{ $active?: boolean }>`
    font-size: 16px;
    font-weight: 600;
    color: white;
    opacity: ${(props) => (props.$active ? 1 : 0.7)};
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 1;
    }

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const ContactGroup = styled(Flex)`
    @media screen and (max-width: 576px) {
        display: none;
    }
`;

export const ContactItemWrapper = styled(Link)`
    width: 18px;
    height: 18px;
    position: relative;
    overflow: hidden;

    &:hover {
        color: #fff !important;
    }

    svg {
        width: 18px;
        height: 18px;
    }
`;

export const IconContainer = styled.span<{ $isHover?: boolean }>`
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
    top: ${(props) => (props.$isHover ? "100%" : "0")};
    transform: translateY(0);

    ${ContactItemWrapper}:hover & {
        transform: translateY(${(props) => (props.$isHover ? "-100%" : "-100%")});
    }
`;
