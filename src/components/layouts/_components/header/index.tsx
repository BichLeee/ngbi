import React from "react";
import { Flex } from "antd";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import logo from "assets/images/logo.png";

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
                    <NavItem to="/projects" $active={pathname === "/projects"}>
                        Projects
                    </NavItem>
                </Nav>
            </Inner>
        </Container>
    );
};

const Container = styled.header`
    width: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 0) 99%);
    backdrop-filter: blur(12px);
    background-color: transparent !important;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`;

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--max-width);
    padding: 0 var(--page-padding-inline);
    width: 100%;
    margin: 0 auto;
    height: 85px;
`;

const Logo = styled.img`
    height: 45px;

    @media screen and (max-width: 576px) {
        height: 25px;
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 40px;

    @media screen and (max-width: 768px) {
        gap: 20px;
    }
`;

const NavItem = styled(Link)<{ $active?: boolean }>`
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
