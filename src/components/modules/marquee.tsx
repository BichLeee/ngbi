import styled, { keyframes } from "styled-components";

export const Marquee = ({ items }: { items: string[] }) => {
    return (
        <MarqueeOuter aria-hidden="true">
            <MarqueeTrack>
                {items.map((item, i) => (
                    <MarqueeItem key={i}>{item}</MarqueeItem>
                ))}
            </MarqueeTrack>
        </MarqueeOuter>
    );
};

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
