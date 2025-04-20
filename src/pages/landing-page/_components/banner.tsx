import styled from "styled-components";
import { Flex } from "antd";

import bannerImage from "assets/images/banner.jpg";
import { NextArrow } from "assets/svgs";

export const Banner = () => {
    return (
        <Container>
            <BannerParallax />
            <Footer>
                <Flex justify="space-between" align="center">
                    <Name gap={20}>
                        <div>{creatingAnimatedText({ text: "Ngoc".split("") })}</div>
                        <div>{creatingAnimatedText({ text: "Bich".split("") })}</div>
                    </Name>
                    <Description gap={5} wrap="wrap">
                        {creatingAnimatedText({
                            text: "aka Sophie. A frontend developer from Vietnam, based in HCM, Vietnam.".split(" "),
                        })}
                    </Description>
                    <NextArrowStyled />
                </Flex>
            </Footer>
        </Container>
    );
};

const creatingAnimatedText = ({ text }: { text: string[] }) => {
    return (
        <>
            {text.map((t, i) => (
                <FloatingText key={i} delay={i * 0.05}>
                    {t}
                </FloatingText>
            ))}
        </>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

const BannerParallax = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-image: url(${bannerImage});

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Footer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    height: 100px;
    padding-inline: var(--page-padding);
    backdrop-filter: brightness(0.5);
`;

const FloatingText = styled.span<{ delay: number }>`
    display: inline-block;
    position: relative;
    opacity: 0;
    transform: translateY(100%);
    animation: floatUp 0.6s ease forwards;
    animation-delay: ${({ delay }) => `${delay}s`};

    @keyframes floatUp {
        to {
            opacity: 1;
            transform: translateY(0%);
        }
    }
`;

const Name = styled(Flex)`
    font-size: 80px;
    font-weight: 700;
    height: 100px;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        font-size: 60px;
    }
`;

const Description = styled(Flex)`
    font-size: 14px;
    font-weight: 700;
    overflow: hidden;
    max-width: 250px;
    padding-left: 50px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NextArrowStyled = styled(NextArrow)`
    &:hover {
        animation: floatDown 1s ease infinite;
    }

    @keyframes floatDown {
        0% {
            transform: translateY(10px);
        }
        50% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(10px);
        }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
