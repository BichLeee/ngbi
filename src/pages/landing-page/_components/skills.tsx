import { Flex } from "antd";
import styled from "styled-components";

import { Typography } from "components/elements";

export const Skills = () => {
    return (
        <Container>
            <Flex vertical gap={20}>
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
            </Flex>
        </Container>
    );
};

const Container = styled.div`
    max-width: 600px;
    min-height: calc(100vh - 85px);
    margin: 0 auto;
    position: relative;
    margin-bottom: 5vh;
    margin-top: 20vh;
    padding-inline: var(--page-padding);
`;
