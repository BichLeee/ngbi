import { Col, Flex, Row } from "antd";
import styled from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Typography } from "components/elements";
// import image1 from "assets/images/NB1.jpg";
import image1 from "assets/images/BG.jpg";
import image2 from "assets/images/NB2.jpg";
import { ScribbleCircle } from "assets/svgs";
import { useRef } from "react";

export const AboutMe = () => {
    const titleRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            ".scribble-circle",
            { drawSVG: 0 },
            {
                drawSVG: 1,
                duration: 2,
                ease: "power2.inOut",
                delay: 0.6,
                scrollTrigger: { trigger: "#scribble-circle", toggleActions: "restart pause resume reverse" },
            }
        );
    }, [titleRef]);

    return (
        <Container>
            <Row gutter={[0, 20]} style={{ height: "100%", flexWrap: "wrap-reverse" }}>
                <Col md={24} lg={12}>
                    <AboutWrapper gap={20} vertical justify="center" ref={titleRef}>
                        <Typography variant="h5">About me</Typography>
                        <Typography variant="h2" color="#fff">
                            Hey there,{" "}
                            <span style={{ position: "relative" }}>
                                I’m Bich <StyledCircle />
                            </span>
                        </Typography>
                        <Typography variant="body3">
                            Hi! I'm a frontend website developer with a passion for building clean, responsive, and
                            user-friendly web interfaces. I'm currently open for freelance opportunities and have
                            hands-on experience working with CMS tools like Drupal. Whether it's creating a custom site
                            or improving an existing one, I focus on delivering quality results that meet client goals.
                            😁
                        </Typography>
                    </AboutWrapper>
                </Col>
                <Col md={24} lg={12} style={{ minHeight: 400, width: "100%" }}>
                    <BackgroundImage />
                    <Image />
                </Col>
            </Row>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    min-height: calc(100vh - 85px);
    position: relative;
    margin-top: calc(100vw * 0.13);
    margin-bottom: calc(100vw * 0.13);

    @media screen and (max-width: 1000px) {
        padding-inline: 8% !important;
    }
`;

const BackgroundImage = styled.div`
    width: 80%;
    height: 90vh;
    border-radius: 4px;
    margin-left: auto;

    background-image: url(${image1});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: right;

    @media screen and (max-width: 1000px) {
        background-position: center;
    }

    @media screen and (max-width: 690px) {
        height: 60vh;
    }
`;

const Image = styled.div`
    height: 50vh;
    aspect-ratio: 3/4;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 4px;

    background-image: url(${image2});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

    @media only screen and (max-width: 690px) {
        height: 35vh;
    }
`;

const StyledCircle = styled(ScribbleCircle)`
    position: absolute;
    width: 136%;
    height: 114%;
    top: -7%;
    left: -18%;
    color: var(--primary);
`;

const AboutWrapper = styled(Flex)`
    padding-inline: 8%;
    height: 100%;
`;
