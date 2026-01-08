import { Col, Divider, Drawer, Flex, Row } from "antd";
import styled from "styled-components";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";
import React from "react";

import { Button, Typography, Carousel } from "components/elements";
import { PROJECTS } from "./projects";
import { IconClock, IconHome, IconPages, IconX } from "assets/svgs";

const Project = ({ project, onClick }: any) => {
    return (
        <ProjectCard onClick={onClick}>
            <div style={{ position: "relative" }}>
                <img src={project.image} className="card-image" />
                <div className="blur-cover">View Projects</div>
            </div>
            <Flex style={{ margin: "16px 8px 4px 8px" }} justify="space-between" align="end">
                <div>
                    <Typography variant="body5" weight="semibold">
                        {project.title}
                    </Typography>
                    <Typography variant="body" top={8}>
                        {project.category}
                    </Typography>
                </div>
                {project.link && (
                    <div>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                window.open(project.link, "_blank");
                            }}
                            size="small"
                        >
                            Visit site
                        </Button>
                    </div>
                )}
            </Flex>
        </ProjectCard>
    );
};

const ProjectDrawer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { project } = Object.fromEntries(searchParams);

    const drawerHeight = window.innerHeight - 40;

    const projectObj = project ? PROJECTS.find((p) => p.key === project) : null;
    const slidesToShow = window.innerWidth <= 1200 ? 1 : window.innerWidth < 1800 ? 2 : 3;

    return (
        <Drawer
            title={null}
            open={!!projectObj}
            placement="bottom"
            size={drawerHeight}
            onClose={() => setSearchParams({})}
            styles={{ header: { display: "none" }, body: { overflowY: "auto", paddingBottom: "60px" } }}
        >
            <DrawerHeader>
                <Typography transform="uppercase" color="#000" weight="semibold">
                    {projectObj?.title}
                </Typography>
                <CloseButton onClick={() => setSearchParams({})}>
                    <IconX />
                </CloseButton>
            </DrawerHeader>
            <ProjectTitle>{projectObj?.title}</ProjectTitle>
            <div style={{ maxWidth: 1200, marginInline: "auto" }}>
                <Flex justify="end">
                    <Button onClick={() => window.open(projectObj?.link, "_blank")}>Preview site</Button>
                </Flex>
                <Typography variant="label1" color="#000" weight="semibold" top={20}>
                    Project overview
                </Typography>
                <Row gutter={[100, 40]}>
                    <Col xs={24} sm={18}>
                        <Typography color="#000" top={16}>
                            {projectObj?.desc}
                        </Typography>
                    </Col>
                    <Col xs={24} sm={6}>
                        <Flex vertical gap={6}>
                            <Typography weight="semibold" color="#000">
                                {projectObj?.side_content?.title}
                            </Typography>
                            {projectObj?.side_content?.list.map((i, index) => (
                                <Flex gap={10} align="center" key={index}>
                                    {i.icon}
                                    <Typography color="#000">{i.text}</Typography>
                                </Flex>
                            ))}
                        </Flex>
                    </Col>
                </Row>
                <Divider style={{ marginBlock: "60px 40px" }} />
                <Flex justify="space-between" style={{ maxWidth: 680, margin: "0 auto 48px auto" }}>
                    <Flex vertical align="center">
                        <IconHome height={20} width={20} />
                        <Typography color="#000" top={8} weight="medium">
                            {projectObj?.details[0][1]}
                        </Typography>
                        <Typography color="#555555">{projectObj?.details[0][0]}</Typography>
                    </Flex>
                    <Flex vertical align="center">
                        <IconClock />
                        <Typography color="#000" top={8} weight="medium">
                            {projectObj?.details[1][1]}
                        </Typography>
                        <Typography color="#555555">{projectObj?.details[1][0]}</Typography>
                    </Flex>
                    <Flex vertical align="center">
                        <IconPages />
                        <Typography color="#000" top={8} weight="medium">
                            {projectObj?.details[2][1]}
                        </Typography>
                        <Typography color="#555555">{projectObj?.details[2][0]}</Typography>
                    </Flex>
                </Flex>
            </div>
            {projectObj?.video && (
                <ReactPlayer
                    src={projectObj.video}
                    controls
                    width="100%"
                    height={600}
                    style={{ maxWidth: 1200, marginInline: "auto" }}
                />
            )}
            {projectObj?.images && (
                <Carousel
                    draggable
                    infinite
                    dots={false}
                    autoplay
                    autoplaySpeed={3000}
                    adaptiveHeight
                    slidesToShow={slidesToShow}
                >
                    {projectObj.images.map((i) => (
                        <CarouselImage src={i} />
                    ))}
                </Carousel>
            )}
        </Drawer>
    );
};

export const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [, setSearchParams] = useSearchParams();

    useGSAP(
        () => {
            gsap.to(".section-content", {
                marginTop: "-100px",
                duration: 3,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top+=0px top",
                    end: "top+=200px top",
                    scrub: 1,
                },
            });
        },
        {
            scope: containerRef,
        }
    );

    return (
        <Container ref={containerRef}>
            <PageTitle>
                My<FrauncesText>Projects</FrauncesText>
            </PageTitle>
            <Row gutter={[20, 20]} className="section-content" style={{ width: "100%" }}>
                {PROJECTS.map((p, index) => (
                    <Col xs={24} sm={12} md={12} lg={8} key={index}>
                        <Project project={p} onClick={() => setSearchParams({ project: p.key })} />
                    </Col>
                ))}
            </Row>
            <ProjectDrawer />
        </Container>
    );
};

const Container = styled.div`
    padding-inline: var(--page-padding-inline);
    padding-block: var(--page-padding-block);
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PageTitle = styled.div`
    font-size: 14rem;
    line-height: normal;
    font-weight: 600;
    text-align: center;
    position: relative;
    margin-bottom: 20px;
    padding-top: 10rem;
    padding-bottom: 20px;
    letter-spacing: -2px;

    @media (max-width: 768px) {
        font-size: 5rem;
    }
`;

const FrauncesText = styled.span`
    font-family: Fraunces;
    font-weight: 300;
    font-style: italic;
`;

const DrawerHeader = styled.div`
    padding-inline: 40px;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
`;

const CloseButton = styled.div`
    background: #000;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const ProjectCard = styled.div`
    backdrop-filter: blur(8px);
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    position: relative;
    cursor: pointer;

    & .card-image {
        width: 100%;
        height: 240px;
        border-radius: 4px;
        object-fit: cover;
    }

    & .blur-cover {
        backdrop-filter: blur(4px);
        border-radius: 12px;
        width: 100%;
        height: 240px;
        position: absolute;
        inset: 0;
        z-index: 1;
        font-family: Fraunces;
        font-size: 2.8rem;
        color: rgba(0, 0, 0, 0.4);
        font-style: italic;
        display: flex;
        align-items: center;
        justify-content: center;
        visibility: hidden;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0.5px;
        background: linear-gradient(to right, transparent 20%, #fff 50%, transparent 80%);
    }

    &:hover .blur-cover {
        visibility: visible;
    }
`;

const ProjectTitle = styled.div`
    font-size: 12rem;
    line-height: normal;
    font-weight: 600;
    text-align: center;
    position: relative;
    margin-bottom: 20px;
    padding-top: 6rem;
    padding-bottom: 28px;
    letter-spacing: -2px;

    @media (max-width: 768px) {
        font-size: 6rem;
    }
`;

const CarouselImage = styled.img`
    height: 400px;
    object-fit: contain;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;
