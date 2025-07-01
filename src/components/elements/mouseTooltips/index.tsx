import React, { useRef, useState } from "react";
import styled from "styled-components";

import { useDebounce } from "utils/helper";

type MouseTooltipProps = {
    content: React.ReactNode;
    children: React.ReactNode;
};

export const MouseTooltip = ({ content, children }: MouseTooltipProps) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    return (
        <Container
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {showTooltip && <Tooltip position={position}>{content}</Tooltip>}
            {children}
        </Container>
    );
};

const Container = styled.div``;

const Tooltip = styled.div<{ position: { x: number; y: number } }>`
    position: absolute;
    left: ${({ position }) => position.x}px;
    top: ${({ position }) => position.y}px;
    background: var(--primary);
    z-index: 1;
    color: #000;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 14px;
    pointer-events: none;
    white-space: nowrap;
    transition: position 0.3s ease-in;
`;
