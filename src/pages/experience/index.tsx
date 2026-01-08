import { Flex } from "antd";
import styled from "styled-components";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { Typography } from "components/elements";
import drcom_logo from "assets/images/drcom-logo.png";
import avianjet_logo from "assets/images/avian-logo-alt2.jpg";

const WorkingExperiences = () => {
    return (
        <>
            <Typography color="#ffffffb3" variant="body3" weight="medium" bottom={100}>
                This section highlights my hands-on experience as a Frontend Developer, where I’ve transformed designs into performant, scalable interfaces. My
                experience focuses on building responsive, user-friendly interfaces with modern technologies, while collaborating closely with designers and
                backend teams to deliver high-quality products.
            </Typography>

            <Flex align="center" justify="center" gap={40}>
                <img src={drcom_logo} height={80} />
                <img src={avianjet_logo} height={80} style={{ borderRadius: 4 }} />
            </Flex>

            <Typography variant="body2" weight="medium" top={100}>
                Avian Solutions
            </Typography>
            <Typography variant="body3" top={8} weight="medium">
                Frontend Developer
            </Typography>
            <Typography color="#ffffffb3" variant="body3" weight="medium" top={16}>
                <BoldText>Avian Solutions</BoldText> is a technology and design company focused on the <BoldText>aviation industry</BoldText>, crafting
                AI-infused software, mobile and web applications, and user-centric digital experiences to help aviation businesses operate more efficiently and
                innovatively.
            </Typography>
            <Typography color="#ffffffb3" variant="body3" weight="medium" top={40}>
                The company has both outsourcing and production projects, relating to managing customer flight bookings.
            </Typography>
            <Typography color="#ffffffb3" variant="body3" weight="medium" top={40}>
                Tech stack
                <br />
                <BoldText>Reactjs, Javascript, Typescript, Nextjs, Ant Design, Styled Component, Module CSS, Bitbucket.</BoldText>
            </Typography>
            <Typography color="#ffffffb3" weight="medium" top={24}>
                (12/2024 - Present)
            </Typography>

            <Typography variant="body2" weight="medium" top={100}>
                DrCom
            </Typography>
            <Typography variant="body3" top={8} weight="medium">
                Intern Developer
            </Typography>
            <Typography color="#ffffffb3" variant="body3" weight="medium" top={16}>
                <BoldText>DrCom Group</BoldText> is a global life-science marketing agency specializing in digital and omnichannel communication for
                <BoldText> healthcare brands</BoldText>.
            </Typography>
            <Typography color="#ffffffb3" variant="body3" weight="medium" top={16}>
                I worked for outsourcing projects which are mostly use <BoldText>CMS Drupal</BoldText> to create websites about healthcare, customized
                components using HTML, CSS, JS following customer's requirements.
            </Typography>
            <Typography color="#ffffffb3" variant="body3" weight="medium" top={16}>
                Besides, I sometimes made advertisement banner by Google Web Designer, or did photoshop.
            </Typography>
            <Typography color="#ffffffb3" weight="medium" top={24}>
                (08/2023 - 03/2024)
            </Typography>
        </>
    );
};

export const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);

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
            <Title>
                My<FrauncesText>Experience</FrauncesText>
            </Title>
            <SectionContent className="section-content">
                <WorkingExperiences />
            </SectionContent>
            <BlurFooter />
        </Container>
    );
};

const Container = styled.div`
    max-width: 900px;
    padding: var(--page-padding);
    margin: 0 auto;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Title = styled.div`
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

const SectionContent = styled.div`
    position: relative;
    background-color: rgba(20, 20, 20, 0.7);
    backdrop-filter: blur(10px);
    padding-top: 80px;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        max-width: 400px;
        width: 100%;
        height: 1px;
        background: linear-gradient(90deg, #141414 0%, #fff 50%, #141414 100%);
    }
`;

const BlurFooter = styled.div`
    width: 100%;
    height: 100px;
    content: "";
    position: fixed;
    bottom: 0;
    left: 0;
    background: linear-gradient(to top, #141414 20%, transparent 100%);
`;

const BoldText = styled.span`
    font-weight: 600;
    color: #fff;
`;
