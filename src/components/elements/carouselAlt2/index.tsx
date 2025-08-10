import React, { useRef, useState } from "react";
import styled from "styled-components";

type CarouselProps = {
    children: React.ReactNode;
    slidesToShow?: number;
    arrows?: boolean;
    dots?: boolean;
    draggable?: boolean;
    infinite?: boolean;
};

export const Carousel = ({ children, ...props }: CarouselProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
        const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
        setIsDragging(true);
        setStartX(pageX);
        setScrollLeft(containerRef.current?.scrollLeft ?? 0);
    };

    const duringDrag = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
        const walk = pageX - startX;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const endDrag = () => {
        setIsDragging(false);
    };
    return (
        <StyledCarousel
            ref={containerRef}
            className="carousel"
            onMouseDown={startDrag}
            onMouseMove={duringDrag}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchStart={startDrag}
            onTouchMove={duringDrag}
            onTouchEnd={endDrag}
            {...props}
        >
            {children}
        </StyledCarousel>
    );
};

const StyledCarousel = styled.div`
    display: flex;
    gap: 30px;
    padding-inline: 8%;
    padding: 8%;
    overflow-x: scroll;
    scroll-behavior: smooth;
    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    cursor: grab;

    &::-webkit-scrollbar {
        display: none;
    }
`;
