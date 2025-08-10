import React, { useRef, useState } from "react";
import { Flex } from "antd";
import styled from "styled-components";

import { Typography } from "components/elements";
import hcmus from "assets/images/hcmus.jpg";
import drcom from "assets/images/drcom2.png";
import avianjet from "assets/images/avianjet.png";
import english from "assets/images/people-talking.jpg";
import toeic_logo from "assets/images/toeic_logo.png";
import hcmus_logo from "assets/images/hcmus-logo.png";
import drcom_logo from "assets/images/drcom-logo.png";
import avianjet_logo from "assets/images/avian-logo.png";
import { Carousel } from "components/elements/carouselAlt2";

const Card = ({ img, children }: { img: string; children: React.ReactNode }) => {
    const boxRef = useRef(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (boxRef.current) {
            const rect = (boxRef.current as HTMLElement).getBoundingClientRect();
            const left = e.clientX - rect.left;
            const top = e.clientY - rect.top;
            setRotate({
                x: (top - rect.height / 2) / (rect.height / 2),
                y: -(left - rect.width / 2) / (rect.width / 2),
            });
        }
    };

    return (
        <CardWrapper img={img} ref={boxRef} rotate={rotate} onMouseMove={handleMouseMove}>
            <Flex vertical gap={20} justify="center" style={{ pointerEvents: "none" }}>
                {children}
            </Flex>
        </CardWrapper>
    );
};

export const Highlight = () => {
    return (
        <Container>
            <Flex justify="center" align="center">
                <Typography
                    variant="h2"
                    color="#fff"
                    transform="uppercase"
                    style={{ textShadow: "3px 5px 2px #ffb4dc" }}
                >
                    Highlight
                </Typography>
            </Flex>
            <Carousel arrows={false} dots={false} draggable infinite={false}>
                <Card img={english}>
                    <img src={toeic_logo} alt="toeic-logo" width={65} />
                    <Typography variant="label1">TOEIC</Typography>
                    <Typography variant="body">
                        <span>
                            <b>Listening - Reading</b>
                            <br /> 845/990
                        </span>
                        <br />
                        <span>
                            <b>Speaking - Writing</b>
                            <br /> 300/400
                        </span>
                    </Typography>
                </Card>
                <Card img={hcmus}>
                    <img src={hcmus_logo} alt="hcmus-logo" width={75} />
                    <Typography variant="label1">
                        HCMUS
                        <br />
                        University of Science
                    </Typography>
                    <Typography variant="body">
                        <b>Software Engineer</b>
                        <br />
                        09/2020 - 09/2024
                    </Typography>
                </Card>
                <Card img={drcom}>
                    <img src={drcom_logo} alt="drcom-logo" width={75} />
                    <Typography variant="label1">DRCOM</Typography>
                    <Typography variant="body">
                        <b>Intern Developer</b>
                        <br />
                        08/2023 - 03/2024
                    </Typography>
                </Card>
                <Card img={avianjet}>
                    <img src={avianjet_logo} alt="drcom-logo" width={65} />
                    <Typography variant="label1">AVIAN SOLUTIONS</Typography>
                    <Typography variant="body">
                        <b>Frontend Developer</b>
                        <br />
                        12/2024 - Present
                    </Typography>
                </Card>
            </Carousel>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 85px);
    position: relative;
`;

const CardWrapper = styled.div<{ img: string; rotate: { x: number; y: number } }>`
    position: relative;
    overflow: hidden;
    z-index: 0;
    height: 450px;
    width: calc((100% - 40px) / 4);
    max-width: 400px;
    min-width: 300px;
    border-radius: 4px;
    padding: 50px;
    cursor: pointer;
    transition: opacity 0.3s ease, transform 0.3s ease;
    display: flex;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url(${({ img }) => img});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.4;
        z-index: -1;
    }

    &:hover {
        transform: perspective(1000px) rotateX(${({ rotate }) => rotate.x * 5}deg)
            rotateY(${({ rotate }) => rotate.y * 5}deg) rotateZ(0deg) scale(1.05);

        &::before {
            opacity: 0.6;
        }
    }
`;
