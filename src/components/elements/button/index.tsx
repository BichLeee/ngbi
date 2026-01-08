import { Button as AntButton, ButtonProps } from "antd";
import React from "react";
import styled from "styled-components";

type ButtonType = Omit<ButtonProps, "variant"> & {
    children?: React.ReactNode;
    variant?: "primary" | "default" | "secondary";
    className?: string;
    size?: "small" | "medium" | "large";
};

export const Button = ({ children, variant = "default", className, ...props }: ButtonType) => {
    const classes = `${className} ngbi-${variant}`;

    return (
        <StyledButton className={classes} {...props}>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled(AntButton)`
    border-color: transparent !important;
    outline: none !important;

    &.ngbi-secondary {
        background: rgba(255, 255, 255, 0.2);
        color: #fff !important;

        &:hover {
            background: rgba(255, 255, 255, 0.1) !important;
        }
    }

    &.ngbi-default {
        background: #000;
        color: #fff !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        border-radius: 999px;

        &:hover {
            background: rgba(0, 0, 0, 0.2) !important;
            color: #000 !important;
        }
    }
`;
