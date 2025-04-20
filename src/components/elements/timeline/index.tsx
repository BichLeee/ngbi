import React from "react";
import { Timeline as AntdTimeline, TimelineItemProps } from "antd";
import styled from "styled-components";

type CarouselProps = {
    items?: TimelineItemProps[];
    mode?: "left" | "right" | "alternate";
};

export const Timeline = ({ ...props }: CarouselProps) => {
    return <StyledTimeline {...props} />;
};

const StyledTimeline = styled(AntdTimeline)`
    & .ant-timeline-item-head-blue {
        background-color: transparent !important;
    }

    & .ant-timeline-item-tail {
        border-inline-start: 2px solid #ffffff1c;
    }
`;
