import React from "react";
import styled from "styled-components";

import { SeparatorRadix } from "@/components/radix";

export const Section = ({
    secRef,
    children,
    heading,
    preHeading,
    headingProps = {},
}: {
    secRef: React.RefObject<HTMLElement | null> | null;
    children: React.ReactNode;
    heading: React.ReactNode;
    preHeading?: React.ReactNode;
    headingProps?: React.HTMLAttributes<HTMLHeadingElement>;
}) => {
    return (
        <Container ref={secRef}>
            <SectionInner>
                <SectionHeading {...headingProps}>
                    <span className="bold">{preHeading}</span> <span className="serif">{heading}</span>
                </SectionHeading>
                <SeparatorRadix style={{ marginBottom: 56 }} />
                {children}
            </SectionInner>
        </Container>
    );
};

const Container = styled.section`
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
