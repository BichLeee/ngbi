import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import netBg from "@/assets/images/net-bg.png";
import { SeparatorRadix } from "@/components/radix";
import { DotTransition } from "@/components/modules";
import { checkDesktopWidth } from "@/utils/helper";

const SKILLS = [
    { name: "React", level: 90, top: "2%", left: "40%" },
    { name: "Vue.js", level: 90, top: "56%", left: "60%" },
    { name: "Redux-Toolkit", level: 90, top: "20%", left: "43%" },
    { name: "TypeScript", level: 80, top: "69%", left: "21%" },
    { name: "Sass", level: 80, top: "15%", left: "21%" },
    { name: "Next.js", level: 75, top: "40%", left: "50%" },
    { name: "Tailwind", level: 80, top: "30%", left: "90%" },
    { name: "Node.js", level: 70, top: "40%", left: "75%" },
    { name: "Figma", level: 70, top: "80%", left: "40%" },
    { name: "Git", level: 80, top: "50%", left: "32%" },
    { name: "REST APIs", level: 65, top: "35%", left: "4%" },
    { name: "Ant Design", level: 90, top: "61%", left: "85%" },
    { name: "GSAP", level: 70, top: "15%", left: "70%" },
    { name: "Cursor", level: 70, top: "27%", left: "34%" },
    { name: "Bootstrap", level: 70, top: "65%", left: "65%" },
    { name: "Drupal", level: 70, top: "72%", left: "51%" },
];

// const ALL_SKILLS = [
//     "React",
//     "VueJS",
//     "ReduxToolkit",
//     "TypeScript",
//     "Javascript",
//     "HTML",
//     "CSS",
//     "Sass",
//     "Next.js",
//     "Tailwind CSS",
//     "Styled Components",
//     "GSAP",
//     "Bootstrap",
//     "Ant Design",
//     "Vuetify",
//     "Figma",
//     "Drupal",
//     "Node.js",
//     "REST APIs",
//     "Adobe Photoshop",
//     "Cursor",
//     "Git",
//     "Bitbucket",
// ];

export const Skills = () => {
    const secRef = useRef<HTMLDivElement>(null);
    const contactNowButtonRef = useRef<HTMLButtonElement>(null);

    const isDesktop = checkDesktopWidth();

    useGSAP(
        () => {
            if (secRef.current) {
                gsap.fromTo(
                    ".section-heading",
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: secRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    },
                );

                if (isDesktop) {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: secRef.current,
                            start: "top+=100px top",
                            end: "bottom",
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
                            left: "calc(50% - 14px)",
                            top: "calc(100%)",
                            width: "28px",
                            height: "28px",
                            boxShadow: "rgba(0,0,0,.03) 0 0 0 6px",
                            duration: 0.2,
                            borderRadius: "100%",
                            autoAlpha: 1,
                        },
                        "<",
                    );

                    tl.to(".skill-box", {
                        duration: 0.0001,
                        opacity: 0,
                    });

                    tl.to(".contact-now-button", {
                        duration: 0.0001,
                        opacity: 1,
                    });

                    tl.to(
                        ".contact-now-button",
                        {
                            top: "calc(100% + 630px)",
                            duration: 0.2,
                        },
                        "<",
                    );

                    tl.to(
                        ".contact-now-button",
                        {
                            width: "300px",
                            height: "40px",
                            padding: "13px 40px",
                            duration: 0.05,
                        },
                        "<40%",
                    );

                    tl.to(".contact-now-button-text", {
                        opacity: 1,
                        duration: 0.01,
                    });
                }
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
        <Wrapper className="skills-section">
            <Container ref={secRef} className={isDesktop ? "desktop-height" : "mobile-height"}>
                {/* <Section heading="Work With" preHeading="What I"/> */}
                {/* <LargeText>What I Work With</LargeText> */}
                <SectionHeading className="section-heading">
                    <span className="bold">What I</span> <span className="serif">Work With</span>
                </SectionHeading>
                <SeparatorRadix style={{ marginBottom: 56 }} />
                {isDesktop && (
                    <>
                        <div style={{ position: "relative", maxWidth: "1000px", margin: "50px auto 0px" }}>
                            <img src={netBg} alt="net-bg" height="100%" width="100%" style={{ maxWidth: "1000px" }} />
                            {SKILLS.map((s) => (
                                <SkillBox className="skill-box" key={s.name} style={{ top: s.top, left: s.left }}>
                                    <span className="skill-box-name" style={{ textWrap: "nowrap" }}>
                                        {s.name}
                                    </span>
                                </SkillBox>
                            ))}
                        </div>
                        <ContactNowButton className="contact-now-button" ref={contactNowButtonRef} onClick={handleContactNow}>
                            <span className="contact-now-button-text">CONTACT NOW</span>
                        </ContactNowButton>
                    </>
                )}
                {!isDesktop && (
                    <div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, margin: "50px auto 0px" }}>
                            {SKILLS.map((s) => (
                                <SkillChip key={s.name}>{s.name}</SkillChip>
                            ))}
                        </div>
                        <div style={{ margin: "100px auto 0px" }}>
                            <DotTransition />
                        </div>
                    </div>
                )}
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background: #000;
    padding: var(--section-py) var(--px);
    /* padding-bottom: 0px; */
    height: 100%;
    min-height: 100vh;
    /* padding-bottom: 100px; */
`;

const Container = styled.div`
    max-width: var(--max);
    margin: 0 auto;
    position: relative;
    padding-top: 100px;

    .desktop-height {
        height: 100%;
        min-height: 100vh;
    }

    .mobile-height {
        height: fit-content;
    }
`;

const SkillBox = styled.div`
    padding: 6px 12px;
    border: 1px solid rgba(162, 162, 162, 0.2);
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    position: absolute;
    font-family: var(--font-mono);

    z-index: 1;
    border-radius: 6px;

    &:hover {
        /* background: rgba(255, 255, 255, 0.2); */
        opacity: 1 !important;
    }
`;

// const LargeText = styled.p`
//     font-size: clamp(1.8rem, 6vw, 5rem);
//     font-weight: 300;
//     line-height: 1.45;
//     font-family: var(--font-display); //var(--font-serif);
//     text-align: center;
// `;

const ContactNowButton = styled.button`
    background: rgba(255, 255, 255, 0.7);
    box-shadow: rgba(96, 96, 96, 0.3) 0 0 0 6px;
    color: #000;
    font-family: var(--font-mono);
    letter-spacing: 0.15em;
    cursor: pointer;
    border: none;
    border-radius: 999px;
    position: absolute;
    left: 50%;
    top: calc(100%);
    transform: translate(-50%, 0);
    opacity: 1;
    width: 28px;
    height: 28px;
    opacity: 0;
    z-index: 1;

    .contact-now-button-text {
        opacity: 0;
    }
`;

const SectionHeading = styled.h2`
    line-height: 1;
    margin-bottom: 48px;
    /* opacity: 0; */
    font-size: clamp(2.4rem, 7vw, 7rem);

    & .bold {
        font-family: var(--font-display);
        font-weight: 800;
        color: white;
    }

    & .serif {
        font-family: var(--font-serif);
        font-weight: 300;
        font-style: italic;
        color: rgba(255, 255, 255, 0.86);
    }
`;

const SkillChip = styled.div`
    padding: 6px 16px;
    border: 1px solid rgba(162, 162, 162, 0.2);
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    font-family: var(--font-mono);
    width: fit-content;
    text-transform: uppercase;
`;
