import { Col, Flex, Row } from "antd";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

import { Typography } from "components/elements";
import LogoVertical from "assets/images/logo-vertical.png";
import { useGSAP } from "@gsap/react";
import gsap, { clamp } from "gsap";
import { Marquee } from "@/components/modules";

const STATEMENT =
    "I design and build digital interfaces that are fast, accessible, and beautifully considered — transforming ideas into experiences that people actually enjoy using.";

export const NgBi = () => {
    const secRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useGSAP(
        () => {
            const words = textRef.current?.querySelectorAll(".ngbi-text-word");
            if (words?.length && textRef.current) {
                gsap.fromTo(
                    words,
                    { opacity: 0.08 },
                    {
                        opacity: 1,
                        stagger: { each: 0.1 },
                        ease: "none",
                        scrollTrigger: { trigger: textRef.current, scrub: 2, start: "top 70%", end: "bottom 40%" },
                    },
                );
            }
        },
        { scope: secRef },
    );

    const items = Array(8)
        .fill(null)
        .flatMap(() => ["NgocBich", "·", "Sophie", "·"]);
    return (
        <TextSection ref={secRef}>
            <TextInner>
                <SectionLabel>About me</SectionLabel>
                <LargeText ref={textRef}>
                    {STATEMENT.split(" ").map((w, i) => (
                        <TextWord key={i} className="ngbi-text-word" style={{ opacity: 0.08 }}>
                            {w}{" "}
                        </TextWord>
                    ))}
                </LargeText>
            </TextInner>
            <Marquee items={items} />
        </TextSection>
    );
};

const TextSection = styled.div`
    background: var(--bg);
    padding: var(--section-py) var(--px);
`;
const TextInner = styled.div`
    max-width: var(--max);
    margin: 0 auto;
`;
const SectionLabel = styled.p`
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: rgba(255, 255, 255, 0.2);
    margin-bottom: 24px;
`;
const LargeText = styled.p`
    font-size: clamp(1.6rem, 3.2vw, 3rem);
    line-height: 1.45;
    font-family: var(--font-sans);
`;

const TextWord = styled.span`
    display: inline-block;
    margin-right: 0.3em;
    color: white;
    opacity: 0.1;
`;
const MarqueeOuter = styled.div`
    overflow: hidden;
    margin-top: 80px;
`;
const MarqueeScroll = keyframes` 0%   { transform: translateX(0); } 100% { transform: translateX(-50%); } `;

const MarqueeTrack = styled.div`
    display: flex;
    gap: 72px;
    will-change: transform;
    animation: ${MarqueeScroll} 20s linear infinite;
`;
const MarqueeItem = styled.span`
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(3.5rem, 9vw, 8rem);
    color: rgba(255, 255, 255, 0.045);
    white-space: nowrap;
    flex-shrink: 0;
    letter-spacing: -0.03em;
`;
