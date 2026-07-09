import styled from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SeparatorRadix } from "@/components/radix";

import image1 from "assets/images/NB4.jpg";
import image2 from "assets/images/NB2.jpg";
import React, { useRef } from "react";

const portrait = image1;
const workspace = "https://images.unsplash.com/photo-1520583457224-aee11bad5112?w=1400&h=900&fit=crop&auto=format";

export const AboutMe = () => {
    const secRef = useRef<HTMLElement>(null);
    const bioRef = useRef<HTMLParagraphElement>(null);
    const bio =
        "A Frontend Developer based in Ho Chi Minh City, Vietnam. I transform designs into performant, scalable interfaces — building responsive, user-friendly experiences with modern technologies. I collaborate closely with designers and backend teams to deliver high-quality products.";

    useGSAP(
        () => {
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
            const words = bioRef.current?.querySelectorAll(".bio-word");
            if (words?.length && bioRef.current) {
                gsap.fromTo(
                    words,
                    { opacity: 0.1 },
                    {
                        opacity: 1,
                        stagger: { each: 0.09, from: "start" },
                        ease: "none",
                        scrollTrigger: { trigger: bioRef.current, scrub: 1.8, start: "top 72%", end: "bottom 50%" },
                    },
                );
            }
            gsap.fromTo(
                secRef.current?.querySelectorAll(".about-stat") ?? [],
                { y: 24, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".about-stats",
                        start: "top 88%",
                        toggleActions: "play none none reverse",
                    },
                },
            );
            // Stacked images slide in
            gsap.fromTo(
                ".about-img-main",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".about-img-stack",
                        start: "top 82%",
                        toggleActions: "play none none reverse",
                    },
                },
            );
            gsap.fromTo(
                ".about-img-secondary",
                { y: 60, x: 20, opacity: 0 },
                {
                    y: 0,
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: ".about-img-stack",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                },
            );
        },
        { scope: secRef },
    );

    return (
        <Section ref={secRef}>
            <SectionInner>
                <SectionHeading className="section-heading">
                    <span className="bold">Hello,</span> <span className="serif">I&apos;m Sophie.</span>
                </SectionHeading>
                <SeparatorRadix style={{ marginBottom: 56 }} />
                <AboutGrid>
                    <AboutImgStack className="about-img-stack">
                        <div style={{ overflow: "hidden" }}>
                            <AboutImgMain
                                src={portrait}
                                alt="NgocBich Sophie"
                                style={{ opacity: 0 }}
                                className="about-img-main"
                            />
                        </div>
                        <AboutImgSecondary
                            src={workspace}
                            alt="Developer workspace"
                            className="about-img-secondary"
                            style={{ opacity: 0 }}
                        />
                    </AboutImgStack>
                    <AboutContent>
                        <AboutBio ref={bioRef}>
                            {bio.split(" ").map((w, i) => (
                                <BioWord key={i} style={{ opacity: 0.1 }} className="bio-word">
                                    {w}
                                </BioWord>
                            ))}
                        </AboutBio>
                        <AboutStats className="about-stats">
                            {[
                                { val: "3+", label: "Years Exp." },
                                { val: "10+", label: "Projects" },
                                { val: "2", label: "Companies" },
                            ].map((s) => (
                                <div key={s.label} style={{ opacity: 0 }} className="about-stat">
                                    <AboutStatVal>{s.val}</AboutStatVal>
                                    <AboutStatLabel>{s.label}</AboutStatLabel>
                                </div>
                            ))}
                        </AboutStats>
                    </AboutContent>
                </AboutGrid>
            </SectionInner>
        </Section>
    );
};

const Section = styled.section`
    background: var(--bg);
    padding: var(--section-py) var(--px);
`;

const SectionInner = styled.div`
    max-width: var(--max);
    margin: 0 auto;
`;

const SectionLabel = styled.div`
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: rgba(255, 255, 255, 0.2);
    margin-bottom: 24px;
`;

const SectionHeading = styled.h2`
    line-height: 1;
    margin-bottom: 48px;
    opacity: 0;
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

const AboutGrid = styled.div`
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 72px;
    align-items: start;

    @media (max-width: 860px) {
        grid-template-columns: 1fr;
        gap: 48px;
    }
`;

const AboutImgStack = styled.div`
    position: relative;
`;

const AboutImgMain = styled.img`
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    object-position: top;
    display: block;
    transform: scale(1.6);
    transform-origin: bottom center;
`;

const AboutImgSecondary = styled.img`
    position: absolute;
    bottom: -32px;
    right: -32px;
    width: 55%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border: 3px solid var(--bg);

    @media (max-width: 860px) {
        display: none;
    }
`;

const AboutContent = styled.div`
    padding-top: 16px;
`;

const AboutBio = styled.p`
    font-size: clamp(15px, 1.5vw, 17px);
    line-height: 1.82;
`;

const BioWord = styled.span`
    display: inline-block;
    margin-right: 0.3em;
    color: white;
    opacity: 0.1;
`;

const AboutStats = styled.div`
    display: flex;
    gap: 48px;
    margin-top: 56px;
    flex-wrap: wrap;
`;

const AboutStatVal = styled.div`
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(2.2rem, 3.5vw, 3rem);
    color: white;
    line-height: 1;

    & .em {
        font-family: var(--font-serif);
        font-weight: 300;
        font-style: italic;
        font-size: 0.6em;
    }
`;

const AboutStatLabel = styled.div`
    font-family: var(--font-mono);
    font-size: 10px;
    color: rgba(255, 255, 255, 0.26);
    text-transform: uppercase;
    letter-spacing: 0.22em;
    margin-top: 10px;
`;
