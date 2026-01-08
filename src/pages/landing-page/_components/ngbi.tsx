import { Col, Flex, Row } from "antd";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Typography } from "components/elements";
import LogoVertical from "assets/images/logo-vertical.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const text1 = "I'm always eager to take on new challenges that push my skills and creativity as a developer.";
const text2 =
    "I enjoy solving problems, learning new tools, and collaborating to bring ideas to life—especially when it comes to creating seamless web experiences that make an impact.";
const text3 = "With every project, I aim to grow as a developer while delivering solutions that make an impact.";

const wordNumber1 = [...text1.split(" ")].length;
const wordNumber2 = [...text2.split(" ")].length;
const wordNumber3 = [...text3.split(" ")].length;

export const NgBi = () => {
    const [visibleWordCount, setVisibleWordCount] = useState(0);
    const wrapperRef = useRef<any>(null);
    const logoRef = useRef<any>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const offset = wrapperRef?.current?.offsetTop - 600 || 0; // 200vh
            const wrapperHeight = wrapperRef.current?.offsetHeight || 1;

            if (scrollY > offset) {
                const current = ((scrollY - offset) * (wordNumber1 + wordNumber2 + wordNumber3)) / wrapperHeight;
                setVisibleWordCount(current);
            } else {
                setVisibleWordCount(0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useGSAP(
        () => {
            gsap.to(logoRef.current, {
                scrollTrigger: {
                    trigger: logoRef.current,
                    start: "top 85px",
                    end: `top+=${wrapperRef?.current?.offsetHeight - logoRef?.current?.offsetHeight} 85px`,
                    scrub: true,
                    pin: true,
                },
            });
        },
        {
            scope: logoRef,
            dependencies: [logoRef.current],
            revertOnUpdate: true,
        }
    );

    return (
        <>
            <DesktopContainer ref={wrapperRef}>
                <Row gutter={[20, 20]} style={{ height: "100%" }}>
                    <Col xs={8}>
                        <Flex justify="start" style={{ maxWidth: "360px" }}>
                            <img src={LogoVertical} alt="logo" width="100%" loading="eager" ref={logoRef} />
                        </Flex>
                    </Col>
                    <Col xs={16}>
                        <Typography variant="body2">
                            <Flex gap={10} wrap="wrap">
                                {text1.split(" ").map((t, i) => (
                                    <Word key={i} visible={i <= visibleWordCount}>
                                        {t}
                                    </Word>
                                ))}
                            </Flex>
                            <Flex gap={10} wrap="wrap" style={{ marginTop: "80px" }}>
                                {text2.split(" ").map((t, i) => (
                                    <Word key={i} visible={i + wordNumber1 <= visibleWordCount}>
                                        {t}
                                    </Word>
                                ))}
                            </Flex>
                            <Flex gap={10} wrap="wrap" style={{ marginTop: "80px" }}>
                                {text3.split(" ").map((t, i) => (
                                    <Word key={i} visible={i + wordNumber1 + wordNumber2 <= visibleWordCount}>
                                        {t}
                                    </Word>
                                ))}
                            </Flex>
                        </Typography>
                    </Col>
                </Row>
            </DesktopContainer>
            <MobileContainer>
                <Flex vertical gap={50}>
                    <Typography variant="h1">
                        <Flex wrap="nowrap" style={{ width: "fit-content" }}>
                            <Marquee>NgocBich</Marquee>
                            <Marquee>NgocBich</Marquee>
                            <Marquee>NgocBich</Marquee>
                        </Flex>
                    </Typography>
                    <div>
                        <Typography variant="body3">
                            I'm always eager to take on new challenges that push my skills and creativity as a
                            developer.
                        </Typography>
                        <Typography variant="body3">
                            I enjoy solving problems, learning new tools, and collaborating to bring ideas to
                            life—especially when it comes to creating seamless web experiences that make an impact.
                        </Typography>
                    </div>
                </Flex>
            </MobileContainer>
        </>
    );
};

const Container = styled.div`
    width: 100vw;
    min-height: calc(100vh - 85px);
    position: relative;
    margin-top: calc(100vw * 0.13);
    margin-bottom: calc(100vw * 0.06);
    padding-inline: var(--page-padding-inline);

    @media screen and (max-width: 1000px) {
        min-height: 100%;
        margin-top: 0;
        margin-bottom: 10vh;
    }
`;

const Word = styled.span<{ visible: boolean }>`
    opacity: ${({ visible }) => (visible ? 1 : 0.2)};
    transition: opacity 0.3s ease;
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

const Marquee = styled.div`
    animation: marquee 8.45s linear infinite;
    text-wrap: nowrap;
    width: fit-content;
    padding-right: 30px;

    @keyframes marquee {
        to {
            transform: translateX(-100%);
        }
    }
`;
