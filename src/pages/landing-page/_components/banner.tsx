import { Flex } from "antd";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import bannerImage from "assets/images/banner2.jpg";
import { NextArrow } from "assets/svgs";

gsap.registerPlugin(useGSAP);

export const Banner = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.to(overlayRef.current, { width: 0, left: "0", duration: 2, ease: "expo.inOut", delay: 1 });
            gsap.fromTo(
                ".my-name",
                { opacity: 0, transform: "translateY(100%)" },
                { opacity: 1, transform: "translateY(0%)", duration: 2, ease: "expo.inOut", stagger: 0.06, delay: 1 }
            );
            gsap.fromTo(
                ".description",
                { opacity: 0, transform: "translateY(100%)" },
                { opacity: 1, transform: "translateY(0%)", duration: 2, ease: "expo.inOut", stagger: 0.06, delay: 1 }
            );
            gsap.to("#next-arrow", {
                transform: "translateY(10px)",
                duration: 0.5,
                ease: "linear",
                repeat: -1,
                yoyo: true,
            });
        },
        {
            scope: containerRef,
        }
    );

    return (
        <Container ref={containerRef}>
            <LoadingOverlay ref={overlayRef} />
            <BannerParallax />
            <Footer>
                <Flex justify="space-between" align="center">
                    <Name>
                        <div>
                            {"Ngoc".split("").map((t, i) => (
                                <Letter key={i} className="my-name">
                                    {t}
                                </Letter>
                            ))}
                        </div>
                        <div>
                            {"Bich".split("").map((t, i) => (
                                <Letter key={i} className="my-name">
                                    {t}
                                </Letter>
                            ))}
                        </div>
                    </Name>
                    <Description gap={5} wrap="wrap">
                        <div>
                            {"aka Sophie. A Frontend Developer from Vietnam, based in HCM, Vietnam."
                                .split(" ")
                                .map((t, i) => (
                                    <Letter key={i} className="description" style={{ paddingRight: "4px" }}>
                                        {t + " "}
                                    </Letter>
                                ))}
                        </div>
                    </Description>
                    <div id="next-arrow">
                        <NextArrow />
                    </div>
                </Flex>
            </Footer>
        </Container>
    );
};

// const creatingAnimatedText = ({ text }: { text: string[] }) => {
//     return (
//         <>
//             {text.map((t, i) => (
//                 <FloatingText key={i} delay={i * 0.05} className="floating-text">
//                     {t}
//                 </FloatingText>
//             ))}
//         </>
//     );
// };

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

const LoadingOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 200vw;
    height: 100vh;
    z-index: 100;
    background: linear-gradient(to right, black 50%, var(--primary) 50%);
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
    padding-inline: var(--page-padding);
    backdrop-filter: brightness(0.5);
`;

const Letter = styled.span`
    display: inline-block;
`;

const Name = styled.div`
    font-size: 80px;
    font-weight: 700;
    height: 100px;
    overflow: hidden;
    line-height: 1;
    display: flex;
    align-items: center;
    gap: 20px;

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

// const NextArrowStyled = styled(NextArrow)`
//     animation: floatDown 1s ease infinite;

//     @keyframes floatDown {
//         0% {
//             transform: translateY(10px);
//         }
//         50% {
//             transform: translateY(0px);
//         }
//         100% {
//             transform: translateY(10px);
//         }
//     }

//     @media screen and (max-width: 768px) {
//         display: none;
//     }
// `;
