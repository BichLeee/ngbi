import { Carousel as AntdCarousel, Flex } from "antd";
import React, { useRef } from "react";
import styled from "styled-components";

import { ArrowLeft, ArrowRight } from "assets/svgs";

type CarouselProps = {
    children: React.ReactNode;
    slidesToShow?: number;
    arrows?: boolean;
    dots?: boolean;
    draggable?: boolean;
    infinite?: boolean;
};

export const Carousel = ({ children, slidesToShow = 1, ...props }: CarouselProps) => {
    const ref = useRef<any>(null);

    return (
        <div>
            <StyledCarousel slidesToShow={slidesToShow} ref={ref || null} {...props}>
                {children}
            </StyledCarousel>
            <Flex align="center" justify="center" gap={20} style={{ marginTop: 24 }}>
                <Button onClick={() => ref?.current?.prev()}>
                    <ArrowLeft />
                </Button>
                <Button onClick={() => ref?.current?.next()}>
                    <ArrowRight />
                </Button>
            </Flex>
        </div>
    );
};

const StyledCarousel = styled(AntdCarousel)`
    &.slick-slider {
        padding-inline: 100px;
    }

    &.slick-slider .slick-list {
        overflow: visible;
    }

    &.slick-slider .slick-slide {
        padding-inline: 10px;
        display: block !important;
    }
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: #fff;
`;
