import { Flex } from "antd";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { Typography } from "components/elements";
import { useRef } from "react";

export const Skills = () => {
    const circleRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            circleRef.current,
            { y: 0 },
            {
                y: 300,
                ease: "power2.inOut",
                duration: 3,
                scrollTrigger: {
                    trigger: circleRef.current,
                    scrub: true,
                    start: "top 90%",
                    end: "bottom -50%",
                },
            }
        );
    });

    return (
        <Container>
            <Flex vertical gap={20} style={{ position: "relative" }}>
                <Typography variant="h1" weight="regular">
                    Skills
                </Typography>
                <Typography variant="body3" weight="regular">
                    Languages - <b>HTML, CSS, JavaScript, TypeScript</b>
                    <br />
                    State management libraries - <b>React, Redux</b>
                    <br />
                    Framework CSS - <b>Antd, Bootstrap, MUI</b>
                    <br />
                    Code formatter - <b>Stylelint, Eslint, Prettier</b>
                    <br />
                    Design - <b>Figma</b>
                    <br />
                    Source code management tools - <b>Bitbucket, Github</b>
                    <br />
                    Task management - <b>Jira, Notion, Trello</b>
                    <br />
                    AI - <b>ChatGPT, Cursor, Copilot</b>
                    <br />
                    English - <b>Fluent</b>
                    <br />
                    CMS - <b>Drupal</b>
                    <br />
                    Photoshop - <b>Adobe Photoshop</b>
                </Typography>
                <Circle ref={circleRef} />
            </Flex>
        </Container>
    );
};

const Container = styled.div`
    max-width: 600px;
    /* min-height: calc(100vh - 85px); */
    margin: 0 auto;
    position: relative;
    margin-bottom: 20vh;
    margin-top: 20vh;
    padding-inline: var(--page-padding);
`;

const Circle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--primary);
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
`;
