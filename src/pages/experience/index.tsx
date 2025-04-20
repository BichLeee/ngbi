import styled from "styled-components";

import { Timeline } from "components/elements/timeline";
import { Typography } from "components/elements";
import { Dot } from "components/elements/dot";
import { Tabs } from "components/elements/Tabs";

import tiktokProject from "assets/images/tiktok.jpeg";
import jobstreetProject from "assets/images/jobstreet.jpeg";
import lovelyPawsProject from "assets/images/lovely-paws.jpeg";
import { Col, Flex, Row } from "antd";

export const Experience = () => {
    const timelineItems = [
        {
            dot: <Dot />,
            children: (
                <div>
                    <Typography color="#ffb4dc">09/2020 - 09/2024</Typography>
                    <Typography weight="bold">University of Science (VNU-HCMUS) </Typography>
                    <Typography>Software Engineer - GPA: 8.4</Typography>
                </div>
            ),
        },
        {
            dot: <Dot />,
            children: (
                <div>
                    <Typography color="#ffb4dc">08/2023 - 03/2024</Typography>
                    <Typography weight="bold">DRCOM - Intern Developer</Typography>
                    <Typography>
                        ---
                        <br />
                        Join outsourcing projects relating to medical
                        <br />
                        Techstack: Drupal, HTML, CSS, JS
                        <br />
                        Tools: Google web designer, Photoshop, ...
                        <br />
                    </Typography>
                    <Link href="https://www.drcomgroup.com/" target="_blank">
                        See more
                    </Link>
                </div>
            ),
        },
        {
            dot: <Dot />,
            children: (
                <div>
                    <Typography color="#ffb4dc">12/2024 - Present</Typography>
                    <Typography weight="bold">Avian solutions - Frontend Developer</Typography>
                    <Typography>
                        ---
                        <br />
                        Join product development relating to aviantion jets
                        <br />
                        Techstack: ReactJS, NextJS, Redux, TypeScript, Ant Design, Styled Components
                        <br />
                        Tools: Jira, Notion, Bitbucket, ...
                    </Typography>
                    <Link href="https://aviansolutions.aero/" target="_blank">
                        See more
                    </Link>
                </div>
            ),
        },
    ];

    const projectItems = [
        {
            key: "1",
            label: "Tiktok",
            children: (
                <TabContent>
                    <Image src={tiktokProject} alt="Tiktok" />
                    <Typography weight="bold" align="center" variant="body3" transform="uppercase">
                        Tiktok
                    </Typography>
                    <Row gutter={[16, 8]} style={{ width: "100%" }}>
                        <Col xs={24} md={4}>
                            <Typography weight="bold">Description</Typography>
                        </Col>
                        <Col xs={24} md={20}>
                            <Typography>Clone tiktok website (https://www.tiktok.com/)</Typography>
                        </Col>
                    </Row>
                    <Row gutter={[16, 8]} style={{ width: "100%" }}>
                        <Col xs={24} md={4}>
                            <Typography weight="bold">Members</Typography>
                        </Col>
                        <Col xs={24} md={20}>
                            <Typography>1 </Typography>
                        </Col>
                    </Row>
                    <Row gutter={[16, 8]} style={{ width: "100%" }}>
                        <Col xs={24} md={4}>
                            <Typography weight="bold">Techstack</Typography>
                        </Col>
                        <Col xs={24} md={20}>
                            <Typography>
                                Languages: HTML, CSS, JS
                                <br />
                                Libraries: ReactJs, Redux (basic)
                                <br />
                                Css framework: React-Boostrap, TippyJs
                                <br />
                                Format Code: Stylelint, Eslint, Prettier
                                <br />
                                API: Axios Github, Github Actions (CI/CD)
                                <br />
                                Others: i18next
                            </Typography>
                        </Col>
                    </Row>
                    <Flex gap={30}>
                        <Link href="https://github.com/BichLeee/tiktok-ui" target="_blank">
                            Github
                        </Link>
                        <Link href="https://youtu.be/Kxv1vkn9WpY" target="_blank">
                            Youtube
                        </Link>
                    </Flex>
                </TabContent>
            ),
        },
        {
            key: "2",
            label: "Jobstreet",
            children: (
                <TabContent>
                    <Image src={jobstreetProject} alt="Jobstreet" />
                    <Typography weight="bold" align="center" variant="body3" transform="uppercase">
                        Jobstreet
                    </Typography>
                    <Row gutter={[16, 8]} style={{ width: "100%" }}>
                        <Col xs={24} md={4}>
                            <Typography weight="bold">Description</Typography>
                        </Col>
                        <Col xs={24} md={20}>
                            <Typography>
                                Clone Jobstreet website (https://www.jobstreet.vn/)
                                <br />
                                The project include 6 repo (3 services, 3 FE)
                            </Typography>
                        </Col>
                    </Row>
                    <Row gutter={[16, 8]} style={{ width: "100%" }}>
                        <Col xs={24} md={4}>
                            <Typography weight="bold">Members</Typography>
                        </Col>
                        <Col xs={24} md={20}>
                            <Typography>11</Typography>
                        </Col>
                    </Row>
                    <Row gutter={[16, 8]} style={{ width: "100%" }}>
                        <Col xs={24} md={4}>
                            <Typography weight="bold">Duties</Typography>
                        </Col>
                        <Col xs={24} md={20}>
                            <Typography>Build front-end for 3 FE repo: Employee, Employer, Admin</Typography>
                        </Col>
                    </Row>
                    <Row gutter={[16, 8]} style={{ width: "100%" }}>
                        <Col xs={24} md={4}>
                            <Typography weight="bold">Techstack</Typography>
                        </Col>
                        <Col xs={24} md={20}>
                            <Typography>
                                Frontend: ReactJS, React-Boostrap
                                <br />
                                Backend: Golang, NodeJS, Mongodb, Redis, Docker,...
                                <br />
                            </Typography>
                        </Col>
                    </Row>
                    <Flex gap={30}>
                        <Link href="https://github.com/SEC-Jobstreet" target="_blank">
                            Github
                        </Link>
                        <Link href="https://www.youtube.com/watch?v=el4ZlCC7LnQ" target="_blank">
                            Youtube
                        </Link>
                    </Flex>
                </TabContent>
            ),
        },
        {
            key: "3",
            label: "Lovely Paws",
            children: (
                <TabContent>
                    <Image src={lovelyPawsProject} alt="Lovely Paws" />
                    <Typography weight="bold" align="center" variant="body3" transform="uppercase">
                        Lovely Paws
                    </Typography>
                    <Row gutter={[16, 8]} style={{ width: "100%" }}>
                        <Col xs={24} md={4}>
                            <Typography weight="bold">Description</Typography>
                        </Col>
                        <Col xs={24} md={20}>
                            <Typography>Design of a website selling pet products and services.</Typography>
                        </Col>
                    </Row>
                    <Row gutter={[16, 8]} style={{ width: "100%" }}>
                        <Col xs={24} md={4}>
                            <Typography weight="bold">Members</Typography>
                        </Col>
                        <Col xs={24} md={20}>
                            <Typography>5</Typography>
                        </Col>
                    </Row>
                    <Row gutter={[16, 8]} style={{ width: "100%" }}>
                        <Col xs={24} md={4}>
                            <Typography weight="bold">Duties</Typography>
                        </Col>
                        <Col xs={24} md={20}>
                            <Typography>Designer</Typography>
                        </Col>
                    </Row>
                    <Flex gap={30}>
                        <Link
                            href="https://www.figma.com/design/Y9bA0345PJUPOqzFEoyN7u/TKGD_Nhom4?node-id=1-4&t=n3Dxu7H490wxnTK2-1"
                            target="_blank"
                        >
                            Figma
                        </Link>
                    </Flex>
                </TabContent>
            ),
        },
    ];

    return (
        <Container>
            <Section>
                <Typography variant="h2" color="#fff" align="center">
                    Education & Work
                </Typography>
                <div style={{ maxWidth: 800 }}>
                    <Timeline items={timelineItems} mode="left" />
                </div>
            </Section>
            <Section>
                <Typography variant="h2" color="#fff" align="center">
                    Projects
                </Typography>
                <Tabs items={projectItems} />
            </Section>
        </Container>
    );
};

const Container = styled.div`
    padding-top: 85px !important;
    max-width: var(--max-width);
    padding: var(--page-padding);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
`;

const Link = styled.a`
    color: #fff !important;
    font-weight: 600;

    &:hover {
        color: var(--primary) !important;
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding-top: 50px;
    padding-bottom: 20px;
    width: 100%;
    max-width: 800px;
`;

const TabContent = styled.div`
    padding: 20px;
    border-radius: 10px;
    background-color: #1a1a1a;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const Image = styled.img`
    width: 100%;
    max-height: 350px;
    max-width: 700px;
    object-fit: cover;
`;
