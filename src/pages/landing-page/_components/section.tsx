import React from "react";
import styled from "styled-components";

import { SeparatorRadix } from "@/components/radix";

export const Section = ({
    secRef = null,
    children,
    heading = null,
    preHeading = null,
    headingProps = {},
}: {
    secRef?: React.RefObject<HTMLElement | null> | null;
    children?: React.ReactNode;
    heading?: React.ReactNode | null;
    preHeading?: React.ReactNode | null;
    headingProps?: React.HTMLAttributes<HTMLHeadingElement>;
}) => {
    return (
        <Container ref={secRef}>
            <SectionInner>
                {heading && (
                    <SectionHeading {...headingProps}>
                        <span className="bold">{preHeading}</span> <span className="serif">{heading}</span>
                    </SectionHeading>
                )}
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