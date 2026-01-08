import { Carousel as AntdCarousel, Flex, CarouselProps } from "antd";
import CarouselType from "antd/lib/carousel";
import React, { useRef } from "react";
import styled from "styled-components";

import { ArrowLeft, ArrowRight } from "assets/svgs";

type CarouselType = CarouselProps & {
    children: React.ReactNode;
    slidesToShow?: number;
    arrows?: boolean;
    dots?: boolean;
    draggable?: boolean;
    infinite?: boolean;
};

export const Carousel = ({ children, slidesToShow = 1, ...props }: CarouselType) => {
    const ref = useRef<any>(null);

    return (
        <div style={{ width: "100%", overflowX: "hidden" }}>
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
        padding-inline: 8vw;
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
