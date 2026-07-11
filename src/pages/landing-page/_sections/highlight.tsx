import { useRef } from "react";
import gsap, { clamp } from "gsap";
import { useGSAP } from "@gsap/react";

import { CarouselRadix } from "@/components/radix";
import { Section } from "../_components";
import styled from "styled-components";

const HIGHLIGHTS = [
    {
        type: "Education",
        title: "B.Sc. Computer Science",
        org: "HCMC University of Technology",
        period: "2020 – 2024",
        desc: "Majored in Software Engineering with a focus on web technologies, UX design, and human-computer interaction.",
    },
    {
        type: "Internship",
        title: "Frontend Dev Intern",
        org: "DrCom",
        period: "Aug 2023 – Mar 2024",
        desc: "Built CMS-based interfaces using Drupal, HTML/CSS/JS. Collaborated closely with design team using Adobe tools.",
    },
    {
        type: "Experience",
        title: "Frontend Developer",
        org: "Avian Solutions",
        period: "Dec 2024 – Present",
        desc: "Building scalable React and Next.js apps with TypeScript. Implementing design systems and collaborating across teams.",
    },
];

export const Highlight = () => {
    const secRef = useRef<HTMLElement>(null);
    useGSAP(
        () => {
            gsap.fromTo(
                ".hl-heading",
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
            gsap.fromTo(
                ".highlight-card",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".carousel-track",
                        start: "top 86%",
                        toggleActions: "play none none reverse",
                    },
                },
            );
        },
        { scope: secRef },
    );

    return (
        <Section
            secRef={secRef}
            preHeading="My"
            heading="Journey"
            headingProps={{ style: { fontSize: "clamp(2.2rem, 6vw, 6rem)" }, className: "hl-heading" }}
        >
            <div
                style={{
                    paddingLeft: "var(--px)",
                    paddingRight: "var(--px)",
                    maxWidth: "calc(var(--max) + var(--px) * 2)",
                    margin: "0 auto",
                }}
            >
                <CarouselRadix>
                    {HIGHLIGHTS.map((h) => (
                        <HighlightCard className="highlight-card" key={h.title} style={{ opacity: 0 }}>
                            <HighlightCardType>{h.type}</HighlightCardType>
                            <HighlightCardTitle>{h.title}</HighlightCardTitle>
                            <HighlightCardOrg>{h.org}</HighlightCardOrg>
                            <HighlightCardPeriod>{h.period}</HighlightCardPeriod>
                            <HighlightCardDesc>{h.desc}</HighlightCardDesc>
                        </HighlightCard>
                    ))}
                </CarouselRadix>
            </div>
        </Section>
    );
};

const HighlightCard = styled.div`
    flex-shrink: 0;
    width: clamp(260px, 28vw, 320px);
    border: 1px solid var(--border);
    padding: 32px 28px;
    transition: background 0.3s;
    cursor: default;

    &:hover {
        background: rgba(255, 255, 255, 0.02);
    }
`;

const HighlightCardType = styled.p`
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: rgba(255, 255, 255, 0.24);
    margin-bottom: 22px;
`;

const HighlightCardTitle = styled.p`
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 1.8rem;
    color: white;
    margin-bottom: 6px;
    line-height: 1.25;
`;

const HighlightCardOrg = styled.p`
    font-family: var(--font-sans);
    font-size: 13px;
    color: rgba(255, 255, 255, 0.46);
    margin-bottom: 18px;
`;

const HighlightCardPeriod = styled.p`
    font-family: var(--font-mono);
    font-size: 11px;
    color: rgba(255, 255, 255, 0.2);
    margin-bottom: 16px;
`;

const HighlightCardDesc = styled.p`
    font-family: var(--font-sans);
    font-size: 13px;
    color: rgba(255, 255, 255, 0.34);
    line-height: 1.65;
`;
