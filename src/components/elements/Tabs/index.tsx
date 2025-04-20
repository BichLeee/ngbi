import { Tabs as AntTabs } from "antd";
import type { TabsProps } from "antd";
import styled from "styled-components";

export const Tabs = ({ ...props }: TabsProps) => {
    return <StyledTab color="#ffb4dc" {...props} />;
};

const StyledTab = styled(AntTabs)`
    & .ant-tabs-tab-btn {
        color: #fff;
    }

    & .ant-tabs-tab-active .ant-tabs-tab-btn {
        color: var(--primary) !important;
        font-weight: 600;
    }

    & .ant-tabs-ink-bar {
        background: var(--primary) !important;
    }
`;
