import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as Tabs from "@radix-ui/react-tabs";

import { AppContext } from "@/contexts/appContext";
import { Experience, LandingPage } from "@/pages";
import { Projects } from "@/pages/projects";

export const Header = () => {
    const navRef = useRef<HTMLElement>(null);
    const navigate = useNavigate();
    const { introHasPlayed } = useContext(AppContext);

    useGSAP(
        () => {
            gsap.from(navRef.current, {
                opacity: 0,
                duration: 0.9,
                delay: introHasPlayed ? 0.1 : 2.0,
                ease: "power2.out",
            });
        },
        { scope: navRef },
    );

    return (
        <AppRoot value="overview" onValueChange={(value) => navigate(`/${value}`)}>
            <AppNav ref={navRef}>
                {/* Plain button — Tabs.Trigger outside Tabs.List causes RovingFocusGroup error */}
                <AppNavLogo onClick={() => navigate("/")}>
                    ng&apos;bi
                </AppNavLogo>
                <AppNavList>
                    {(["overview", "experience", "projects"] as const).map((p) => (
                        <AppNavTrigger key={p} value={p}>
                            {p}
                        </AppNavTrigger>
                    ))}
                </AppNavList>
            </AppNav>
            <Tabs.Content value="overview">
                <LandingPage />
            </Tabs.Content>
            <Tabs.Content value="experience">
                <Experience />
            </Tabs.Content>
            <Tabs.Content value="projects">
                <Projects />
            </Tabs.Content>
        </AppRoot>
    );
};

const AppRoot = styled(Tabs.Root)`
    min-height: 100vh;
    background: var(--bg);
    color: var(--fg);
`;

const AppNav = styled.nav`
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

const AppNavList = styled(Tabs.List)`
    display: flex; align-items: center; gap: 4px;
    background: none; border: none; box-shadow: none;
`;

const AppNavTrigger = styled(Tabs.Trigger)`
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
    &[data-state="active"] {
        color: white;
        border-bottom-color: white;
    }
`;