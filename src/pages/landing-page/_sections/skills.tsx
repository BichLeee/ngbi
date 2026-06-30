import { useLayoutEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as Progress from "@radix-ui/react-progress";

import { Section } from "../_components";
import { Marquee } from "@/components/modules";
import netBg from "@/assets/images/net-bg.png";
import { genMasonryStyle } from "antd/es/masonry/style";

const SKILLS = [
    { name: "React", level: 90, top: "10%", left: "40%" },
    { name: "TypeScript", level: 80, top: "20%", left: "11%" },
    { name: "Next.js", level: 75, top: "20%", left: "50%" },
    { name: "Tailwind CSS", level: 80, top: "40%", left: "90%" },
    { name: "Node.js", level: 70, top: "50%", left: "75%" },
    { name: "Figma", level: 70, top: "60%", left: "30%" },
    { name: "Git", level: 80, top: "70%", left: "20%" },
    { name: "REST APIs", level: 65, top: "80%", left: "50%" },
    { name: "Ant Design", level: 90, top: "70%", left: "85%" },
    { name: "GSAP", level: 70, top: "25%", left: "70%" },
];

const ALL_SKILLS = [
    "React",
    "VueJS",
    "ReduxToolkit",
    "TypeScript",
    "Javascript",
    "HTML",
    "CSS",
    "Sass",
    "Next.js",
    "Tailwind CSS",
    "Styled Components",
    "GSAP",
    "Bootstrap",
    "Ant Design",
    "Vuetify",
    "Figma",
    "Drupal",
    "Node.js",
    "REST APIs",
    "Adobe Photoshop",
    "Cursor",
    "Git",
    "Bitbucket",
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const indRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!indRef.current) return;
            gsap.fromTo(
                indRef.current,
                { width: "0%" },
                {
                    width: `${level}%`,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: rootRef.current,
                        start: "top 88%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            gsap.fromTo(
                indRef.current,
                { width: "0%" },
                {
                    width: `${level}%`,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: rootRef.current,
                        start: "top 88%",
                        toggleActions: "play none none reverse",
                    },
                },
            );
        },
        { scope: rootRef },
    );

    return (
        <SkillBarRoot ref={rootRef}>
            <SkillBarHead>
                <SkillName>{name}</SkillName>
                <SkillPct>{level}%</SkillPct>
            </SkillBarHead>
            <ProgressRoot value={level}>
                <ProgressIndicator ref={indRef} />
            </ProgressRoot>
        </SkillBarRoot>
    );
};

export const Skills = () => {
    const secRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                ".sk-heading",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: secRef.current,
                        start: "top 82%",
                        toggleActions: "play none none reverse",
                    },
                },
            );
            // gsap.utils.toArray(".skill-box").forEach((box: any, index: number) => {
            //     gsap.fromTo(
            //         box,
            //         { y: 20, opacity: 0 },
            //         {
            //             scrollTrigger: {
            //                 trigger: secRef.current,
            //                 start: "top+=100px ",
            //                 toggleActions: "play none none reverse",
            //             },
            //             y: 0,
            //             opacity: 0.66,
            //             duration: 0.6,
            //             stagger: 0.08,
            //             ease: "power1",
            //             delay: index * 0.01,
            //         },
            //     );
            // });
            // gsap.fromTo(
            //     ".skill-box-item",
            //     {
            //         y: 0,
            //     },
            //     {
            //         x: `${window.innerWidth / 2}px`,
            //         y: `500px`,
            //         opacity: 1,
            //         scrollTrigger: {
            //             trigger: containerRef.current,
            //             start: "top top",
            //             end: "bottom top",
            //             // pin: true,
            //             scrub: 1,
            //             markers: true
            //         },
            //     },
            // );
        },
        { scope: secRef },
    );

    useLayoutEffect(() => {
        secRef.current?.style.setProperty("background", "#000");
    }, [secRef.current]);

    return (
        <>
            <Section
                secRef={secRef}
                preHeading="My"
                heading="Skills"
                headingProps={{ style: { fontSize: "clamp(2.2rem, 6vw, 6rem)" }, className: "sk-heading" }}
            >
                <SkillsGrid>
                    {SKILLS.map((s) => (
                        <SkillBar key={s.name} name={s.name} level={s.level} />
                    ))}
                </SkillsGrid>
                {/* <AllSkillsList>
                {ALL_SKILLS.map((s) => (
                    <SkillBox className="skill-box" key={s}>
                        {s}
                    </SkillBox>
                ))}
                </AllSkillsList> */}
                {/* <div style={{ position: "relative" }}>
                    <MarqueeOuter aria-hidden="true">
                        <MarqueeTrack>
                            {ALL_SKILLS.map((item, i) => (
                                <MarqueeItem key={i}>{item}</MarqueeItem>
                            ))}
                        </MarqueeTrack>
                    </MarqueeOuter>
                    <DynamicMorphing />
                </div> */}
                <Container ref={containerRef}>
                    <img src={netBg} alt="net-bg" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <LargeText>My Skills</LargeText>
                    {SKILLS.map((s) => (
                        <SkillBox className="skill-box-item" key={s.name} style={{ top: s.top, left: s.left }}>
                            {s.name}
                        </SkillBox>
                    ))}
                </Container>
            </Section>
        </>
    );
};

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 56px;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

const SkillBarRoot = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid var(--border);
`;

const SkillBarHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 12px;
`;
const SkillName = styled.span`
    font-family: var(--font-mono);
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.1em;
`;
const SkillPct = styled.span`
    font-family: var(--font-mono);
    font-size: 11px;
    color: rgba(255, 255, 255, 0.24);
`;
const ProgressRoot = styled(Progress.Root)`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.07);
`;
const ProgressIndicator = styled(Progress.Indicator)`
    height: 100%;
    background: white;
    width: 0;
`;

const AllSkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-inline: calc(var(--px) * -1 + 10px);
    margin-top: 8rem;
    width: fit-content;
    align-items: center;
    justify-content: center;
`;

const SkillBox = styled.div`
    padding: 6px 12px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: background 0.3s;
    font-size: 13px;
    font-weight: 500;
    width: fit-content;
    position: absolute;

    z-index: 1;
    border-radius: 2px;

    &:hover {
        /* background: rgba(255, 255, 255, 0.2); */
        opacity: 1 !important;
    }
`;

const MarqueeOuter = styled.div`
    overflow: hidden;
    margin-top: 80px;
`;
const MarqueeScroll = keyframes` 0%   { transform: translateX(0); } 100% { transform: translateX(-50%); } `;

const MarqueeTrack = styled.div`
    display: flex;
    gap: 40px;
    will-change: transform;
    animation: ${MarqueeScroll} 20s linear infinite;
`;
const MarqueeItem = styled.span`
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 13px;
    color: white;
    white-space: nowrap;
    flex-shrink: 0;
    letter-spacing: -0.03em;
`;

const DynamicMorphing = styled.div`
    position: absolute;
    top: 8px;
    left: -20vw;
    width: calc(100vw + 40vw);
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
`;

const Container = styled.div`
    position: relative;
`;

const LargeText = styled.p`
    font-size: clamp(1.8rem, 6vw, 5rem);
    font-weight: 300;
    line-height: 1.45;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: var(--font-mono);
`;
