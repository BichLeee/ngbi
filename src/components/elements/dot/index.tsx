import styled from "styled-components";

export const Dot = ({ width = 14, height = 14 }: { width?: number; height?: number }) => {
    return <StyledDot width={width} height={height}></StyledDot>;
};

const StyledDot = styled.i<{ width?: number; height?: number }>`
    height: ${({ height }) => height}px;
    width: ${({ width }) => width}px;
    background: #ffb4dc;
    border-radius: 50%;
    display: block;

    &::after {
        display: block;
        position: absolute;
        background-color: #ffb4dc;
        opacity: 1;
        z-index: 11;
        pointer-events: none;
        animation: dot-animation 2s cubic-bezier(0.2, 1, 0.2, 1) infinite;
        content: "";
        border-radius: 50%;
        background: #ffb4dc;
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
