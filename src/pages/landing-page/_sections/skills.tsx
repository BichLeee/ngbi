import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as Progress from "@radix-ui/react-progress";

import netBg from "@/assets/images/net-bg.png";

const SKILLS = [
    { name: "React", level: 90, top: "100px", left: "40%" },
    { name: "TypeScript", level: 80, top: "150px", left: "11%" },
    { name: "Next.js", level: 75, top: "200px", left: "50%" },
    { name: "Tailwind CSS", level: 80, top: "300px", left: "90%" },
    { name: "Node.js", level: 70, top: "400px", left: "75%" },
    { name: "Figma", level: 70, top: "400px", left: "30%" },
    { name: "Git", level: 80, top: "500px", left: "20%" },
    { name: "REST APIs", level: 65, top: "350px", left: "20%" },
    { name: "Ant Design", level: 90, top: "410px", left: "85%" },
    { name: "GSAP", level: 70, top: "150px", left: "70%" },
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
    const secRef = useRef<HTMLDivElement>(null);
    const contactNowButtonRef = useRef<HTMLButtonElement>(null);

    useGSAP(
        () => {
            if (secRef.current) {
                // console.log(containerRef.current.clientWidth, secRef.current!.clientHeight);

                const box = document.querySelector(".skill-box") as HTMLElement;

                console.log("before", getComputedStyle(box).top);

                requestAnimationFrame(() => {
                    console.log("after", getComputedStyle(box).top);
                });

                const targetTop = secRef.current!.offsetHeight + 14;
                const targetLeft = secRef.current!.offsetWidth / 2 - 14;

                console.log("targetTop", targetTop);

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: secRef.current,
                        start: "center center",
                        end: "bottom+=300px",
                        scrub: true,
                        // markers: true,
                        toggleActions: "play none none reverse",
                    },
                });
                tl.to(".skill-box-name", {
                    opacity: 0,
                    duration: 0.01,
                });

                tl.to(
                    ".skill-box",
                    {
                        left: targetLeft,
                        top: targetTop,
                        width: "28px",
                        height: "28px",
                        boxShadow: "rgba(0,0,0,.01) 0 0 0 6px",
                        duration: 0.2,
                        borderRadius: "100%",
                        autoAlpha: 1,
                    },
                    "<",
                );

                tl.to(".contact-now-button", {
                    duration: 0.0001,
                    opacity: 1,
                });

                tl.to(".skill-box", {
                    duration: 0.0001,
                    opacity: 0,
                });

                tl.to(
                    ".contact-now-button",
                    {
                        scale: 1,
                        top: "calc(100% + 800px)",
                        duration: 0.2,
                        padding: "13px 40px",
                        width: "300px",
                        height: "40px",
                    },
                    "<",
                );

                tl.to(".contact-now-button-text", {
                    opacity: 1,
                    duration: 0.01,
                });
            }
        },
        { scope: secRef },
    );

    useLayoutEffect(() => {
        secRef.current?.style.setProperty("background", "#000");
    }, [secRef.current]);

    const handleContactNow = () => {
        window.location.href = "mailto:bich1042002@gmail.com";
    };

    return (
        <Wrapper>
            <Container ref={secRef}>
                <img src={netBg} alt="net-bg" height="100%" width="100%" />
                <LargeText>My Skills</LargeText>
                {SKILLS.map((s) => (
                    <SkillBox className="skill-box" key={s.name} style={{ top: s.top, left: s.left }}>
                        <span className="skill-box-name" style={{ textWrap: "nowrap" }}>{s.name}</span>
                    </SkillBox>
                ))}
                <ContactNowButton className="contact-now-button" ref={contactNowButtonRef} onClick={handleContactNow}>
                    <span className="contact-now-button-text">CONTACT NOW</span>
                </ContactNowButton>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background: #000;
    padding: var(--section-py) var(--px);
`;

const Container = styled.div`
    max-width: var(--max);
    margin: 0 auto;
    position: relative;
    min-height: 100vh;
    height: fit-content;
    padding-top: 80px;
    margin-bottom: 200px;
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

const SkillBox = styled.div`
    padding: 6px 6px;
    /* border: 1px solid rgba(0, 0, 0, 0.5); */
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    position: absolute;
    width: fit-content;

    z-index: 1;
    border-radius: 4px;

    &:hover {
        /* background: rgba(255, 255, 255, 0.2); */
        opacity: 1 !important;
    }
`;

const LargeText = styled.p`
    font-size: clamp(1.8rem, 6vw, 5rem);
    font-weight: 300;
    line-height: 1.45;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: var(--font-serif);
`;

const ContactNowButton = styled.button`
    background: rgba(255, 255, 255, 0.7);
    box-shadow: rgba(96, 96, 96, 0.1) 0 0 0 6px;
    color: #000;
    font-family: var(--font-mono);
    letter-spacing: 0.15em;
    cursor: pointer;
    border: none;
    border-radius: 999px;
    position: absolute;
    left: 50%;
    top: calc(100%);
    transform: translate(-50%, 50%);
    opacity: 1;
    width: 28px;
    height: 28px;
    opacity: 0;
    z-index: 1;

    .contact-now-button-text {
        opacity: 0;
    }
`;
