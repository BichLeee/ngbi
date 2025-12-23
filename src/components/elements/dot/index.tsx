import styled from "styled-components";

export const Dot = ({ width = 10, height = 10, color = "#fff" }: { width?: number; height?: number; color?: string }) => {
    return <StyledDot width={width} height={height} color={color}></StyledDot>;
};

const StyledDot = styled.i<{ width?: number; height?: number; color?: string }>`
    height: ${({ height }) => height}px;
    width: ${({ width }) => width}px;
    background: ${({ color }) => color};
    border-radius: 50%;
    display: block;

    &::after {
        display: block;
        position: absolute;
        background-color: var(--primary);
        opacity: 1;
        z-index: 11;
        pointer-events: none;
        animation: dot-animation 2s cubic-bezier(0.2, 1, 0.2, 1) infinite;
        content: "";
        border-radius: 50%;
        background: var(--primary);
        height: ${({ height }) => height}px;
        width: ${({ width }) => width}px;
    }

    @keyframes dot-animation {
        0% {
            opacity: 0.6;
            transform: scale(1);
        }

        100% {
            opacity: 0;
            transform: scale(3);
        }
    }
`;
