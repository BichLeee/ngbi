import * as Tooltip from "@radix-ui/react-tooltip";
import React from "react";
import styled, { keyframes } from "styled-components";

export const TooltipRadix = ({ children, label }: { children: React.ReactNode; label: string }) => {
    return (
        <Tooltip.Provider delayDuration={300}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
                <Tooltip.Portal>
                    <TooltipContent className="tooltip-content" sideOffset={6}>
                        {label}
                        <TooltipArrow className="tooltip-arrow" />
                    </TooltipContent>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

const TooltipIn = keyframes`
    from { opacity: 0; transform: translateY(4px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const TooltipContent = styled(Tooltip.Content)`
    background: rgba(255, 255, 255, 0.92);
    color: #060606;
    font-family: var(--font-mono);
    font-size: 11px;
    padding: 5px 10px;
    letter-spacing: 0.04em;
    animation: ${TooltipIn} 0.15s ease;
`;
const TooltipArrow = styled(Tooltip.Arrow)`
    fill: rgba(255, 255, 255, 0.92);
`;
