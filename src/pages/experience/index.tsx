import { Col, Flex, Row } from "antd";
import styled from "styled-components";
import gsap from "gsap";
import { use, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Dot, Tabs, Typography, Timeline } from "components/elements";

export const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // useGSAP(
    //     () => {
    //         const sections = gsap.utils.toArray<HTMLElement>(".pin-section");

    //         sections.forEach((section, index) => {
    //             ScrollTrigger.create({
    //                 trigger: section,
    //                 start: "top 85px",
    //                 end: `top+=${containerRef?.current?.offsetHeight - (section.offsetHeight + 10   0) * index} 85px`,
    //                 scrub: true,
    //                 pin: true,
    //                 markers: true,
    //             });
    //         });
    //     },
    //     {
    //         scope: containerRef,
    //         dependencies: [containerRef.current],
    //         revertOnUpdate: true,
    //     }
    // );

    return (
        <Container ref={containerRef}>
            <Section className="pin-section pin-section-1" index={1}>
                <Typography variant="h2" align="center">
                    Education & Work Education & Work Education & Work Education & Work Education & Work Education &
                    Education & Work Education & Work Education & Work Education & Work Education & Work Education &
                    Education & Work Education & Work Education & Work Education & Work Education & Work Education &
                </Typography>
            </Section>
            <Section className="pin-section pin-section-2" index={2}>
                <Typography variant="h2" align="center">
                    Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects
                    Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects
                    Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects
                </Typography>
            </Section>
            <Section className="pin-section pin-section-3" index={3}>
                <Typography variant="h2" align="center">
                    Projects 2 Projects 2 Projects 2 Projects 2
                </Typography>
            </Section>
        </Container>
    );
};

const Container = styled.div`
    max-width: var(--max-width);
    padding: var(--page-padding);
    margin: 0 auto;
    overflow-y: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Section = styled.div<{ index: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding-top: 50px;
    padding-bottom: 20px;
    width: 100%;
    max-width: 800px;
    height: calc(100vh - 200px);
    margin: 50px auto;
    background-color: #fff;
    opacity: 0.3;
    position: sticky !important;
    top: 0;
    display: block;
    top: 0;
`;
