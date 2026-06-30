import * as ScrollArea from "@radix-ui/react-scroll-area";
import React from "react";
import styled from "styled-components";

export const CarouselRadix = ({ children }: { children: React.ReactNode }) => {
    return (
        <ScrollAreaRoot type="scroll">
            <ScrollAreaViewport>
                <CarouselTrack className="carousel-track">{children}</CarouselTrack>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar orientation="horizontal">
                <ScrollAreaThumb />
            </ScrollAreaScrollbar>
        </ScrollAreaRoot>
    );
};

const ScrollAreaRoot = styled(ScrollArea.Root)`
    width: 100%;
`;
const ScrollAreaViewport = styled(ScrollArea.Viewport)`
    width: 100%;
    overflow: hidden;
`;
const CarouselTrack = styled.div`
    display: flex;
    gap: 1px;
`;

const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar)`
    display: flex;
    user-select: none;
    touch-action: none;
    background: rgba(255, 255, 255, 0.03);
`;
const ScrollAreaThumb = styled(ScrollArea.Thumb)`
    flex: 1;
    background: rgba(255, 255, 255, 0.16);
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        min-height: 44px;
    }
`;
