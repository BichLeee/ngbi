import { Flex } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Carousel, Typography } from "components/elements";
import { ScribbleUnderline } from "assets/svgs";

import tiktok from "assets/images/tiktok.jpeg";
import jobstreet from "assets/images/jobstreet.jpeg";
import lovelyPaws from "assets/images/lovely-paws.jpeg";

export const Projects = () => {
    const projects = [
        {
            image: tiktok,
            title: "TikTok",
            description: (
                <p>
                    A clone of TikTok <br />
                    <StyledLink target="_blank" to="https://github.com/BichLeee/tiktok-ui">
                        Github link
                    </StyledLink>
                </p>
            ),
        },
        {
            image: jobstreet,
            title: "Jobstreet",
            description: (
                <p>
                    A clone of Jobstreet - a job listing website <br />
                    <StyledLink target="_blank" to="https://github.com/SEC-Jobstreet">
                        Github link
                    </StyledLink>
                </p>
            ),
        },
        {
            image: lovelyPaws,
            title: "Lovely Paws",
            description: (
                <p>
                    Design of a website selling pet products and services. <br />
                    <StyledLink
                        target="_blank"
                        to="https://www.figma.com/design/Y9bA0345PJUPOqzFEoyN7u/TKGD_Nhom4?node-id=1-4&t=n3Dxu7H490wxnTK2-1"
                    >
                        Figma link
                    </StyledLink>
                </p>
            ),
        },
    ];

    return (
        <Container>
            <Flex vertical gap={50}>
                <Flex gap={20} vertical align="center" justify="center">
                    <Typography variant="h5" align="center">
                        Real works, real results
                    </Typography>
                    <Typography variant="h2" color="#fff" align="center">
                        My{" "}
                        <span style={{ position: "relative" }}>
                            Projects <StyledUnderline />
                        </span>
                    </Typography>
                </Flex>
                <DesktopContainer>
                    <Carousel slidesToShow={2} arrows={false} dots={false} draggable infinite>
                        {projects.map((project) => (
                            <Card>
                                <Image src={project.image} />
                                <Typography align="center" variant="label1" weight="bold">
                                    {project.title}
                                </Typography>
                                <Typography align="center">{project.description}</Typography>
                            </Card>
                        ))}
                    </Carousel>
                </DesktopContainer>
                <MobileContainer>
                    <Carousel slidesToShow={1} arrows={false} dots={false} draggable infinite>
                        {projects.map((project) => (
                            <Card>
                                <Image src={project.image} />
                                <Typography align="center" variant="label1" weight="bold">
                                    {project.title}
                                </Typography>
                                <Typography align="center">{project.description}</Typography>
                            </Card>
                        ))}
                    </Carousel>
                </MobileContainer>
            </Flex>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    min-height: calc(100vh - 85px);
    margin: 0 auto;
    position: relative;
`;

const StyledUnderline = styled(ScribbleUnderline)`
    position: absolute;
    bottom: -12px;
    left: 0;
`;

const Card = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.16);
    background-color: black;
    padding: 50px;
    border-radius: 8px;
    height: 400px;
    cursor: grab;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
`;

const StyledLink = styled(Link)`
    color: #ffb4dc !important;
`;

const DesktopContainer = styled(Container)`
    @media (max-width: 1000px) {
        display: none;
    }
`;

const MobileContainer = styled(Container)`
    @media (min-width: 1000px) {
        display: none;
    }
`;
