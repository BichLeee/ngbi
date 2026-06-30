import * as Separator from "@radix-ui/react-separator";
import React from "react";
import styled from "styled-components";

export const SeparatorRadix = ({ style, ...props }: { style?: React.CSSProperties } & Separator.SeparatorProps) => {
    return <SeparatorRoot decorative style={style} {...props} />;
};

const SeparatorRoot = styled(Separator.Root)`
    height: 1px;
    background: var(--border);
    width: 100%;
    border: none;

    &[data-orientation="vertical"] {
        width: 1px;
        height: auto;
        flex-shrink: 0;
    }
`;
