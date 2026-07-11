import { useContext, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { AppContext } from "@/contexts/appContext";
import { ROUTES } from "@/utils/route";

export const Header = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const route = useLocation();
    // const { introHasPlayed } = useContext(AppContext);

    useGSAP(
        () => {
            // gsap.from(navRef.current, {
            //     opacity: 0,
            //     duration: 0.9,
            //     delay: introHasPlayed ? 0.1 : 2.0,
            //     ease: "power2.out",
            //     scrollTrigger: {
            //         trigger: "#smooth-content",
            //         start: "top top",
            //         end: "bottom bottom",
            //         scrub: true,
            //         markers: true,
            //     },
            // });
            gsap.from(navRef.current, {
                opacity: 0,
                duration: 0.9,
                delay: 2.0,
                ease: "power2.out",
            });

            let lastScroll = window.scrollY;

            const handleScroll = () => {
                const currentScroll = window.scrollY;

                if (currentScroll > lastScroll && currentScroll > 80) {
                    // scrolling down
                    gsap.to(navRef.current, {
                        yPercent: -100,
                        duration: 0.8,
                        ease: "power2.out",
                        overwrite: "auto",
                    });
                } else {
                    // scrolling up
                    gsap.to(navRef.current, {
                        yPercent: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        overwrite: "auto",
                    });
                }

                lastScroll = currentScroll;
            };

            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        },
        { scope: navRef },
    );

    return (
        <Container>
            <AppNav ref={navRef}>
                {/* Plain button — Tabs.Trigger outside Tabs.List causes RovingFocusGroup error */}
                <AppNavLogo onClick={() => navigate("/")}>ng&apos;bi</AppNavLogo>
                <AppNavList>
                    <StyledNavLink to={ROUTES.LANDING} className={route.pathname === ROUTES.LANDING ? "active" : ""}>
                        Overview
                    </StyledNavLink>
                    <StyledNavLink to={ROUTES.EXPERIENCE} className={route.pathname === ROUTES.EXPERIENCE ? "active" : ""}>
                        Experience
                    </StyledNavLink>
                    <StyledNavLink to={ROUTES.PROJECTS} className={route.pathname === ROUTES.PROJECTS ? "active" : ""}>
                        Projects
                    </StyledNavLink>
                </AppNavList>
            </AppNav>
        </Container>
    );
};

const Container = styled.div`
    background: var(--bg);
    color: var(--fg);
    /* min-height: 100vh; */
`;

const AppNav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px var(--px);
`;

const AppNavLogo = styled.button`
    font-family: var(--font-mono);
    font-size: 14px;
    letter-spacing: 0.05em;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.9;
    transition: opacity 0.3s;
    padding: 0;

    &:hover {
        opacity: 0.45;
    }
`;

const AppNavList = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    box-shadow: none;
`;

const StyledNavLink = styled(NavLink)`
    padding: 5px 13px;
    font-size: 13px;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.4);
    background: none;
    border: 1px solid transparent;
    cursor: pointer;
    font-family: var(--font-sans);
    transition:
        color 0.25s,
        border-color 0.25s;

    &:hover {
        color: rgba(255, 255, 255, 0.78);
    }
    &.active {
        color: white;
        border-bottom-color: white;
    }
`;
