import React from "react";
import { Typography as AntTypography } from "antd";
import styled from "styled-components";

const { Paragraph } = AntTypography;

type TypographyProps = {
    children: React.ReactNode;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "body1" | "body2" | "body3" | "body4" | "body5" | "body6" | "label1";
    rootClassName?: string;
    style?: React.CSSProperties;
    align?: React.CSSProperties["textAlign"] | null;
    color?: string | null;
    top?: number | null;
    left?: number | null;
    right?: number | null;
    bottom?: number | null;
    transform?: React.CSSProperties["textTransform"] | null;
    truncate?: boolean;
    weight?: "light" | "regular" | "medium" | "semibold" | "bold" | "heavy" | null;
    onClick?: () => void;
};

export const Typography = ({
    children = null,
    variant = "body",
    rootClassName = "",
    style = {},
    align = null,
    color = null,
    top = null,
    left = null,
    right = null,
    bottom = null,
    transform = null,
    truncate = false,
    weight = null,
    onClick = () => {},
    ...props
}: TypographyProps) => {
    const fw = {
        light: 200,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        heavy: 800,
    };

    let inline = { ...style } as React.CSSProperties;

    if (align) inline.textAlign = align;
    if (weight) inline.fontWeight = fw[weight];
    if (color) inline.color = color;
    if (transform) inline.textTransform = transform;
    if (top) inline.marginTop = top;
    if (left) inline.marginLeft = left;
    if (right) inline.marginRight = right;
    if (bottom) inline.marginBottom = bottom;
    if (truncate)
        inline = {
            ...inline,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        };

    return (
        <StyledTypography className={`hatemen-${variant} ${rootClassName}`} onClick={onClick} style={inline} {...props}>
            {children}
        </StyledTypography>
    );
};

const StyledTypography = styled(Paragraph)`
    line-height: normal;
    &.ant-typography,
    &.ant-typography p {
        margin: 0;
    }
    &.hatemen-h1 {
        color: var(--primary);
        font-weight: 700;
        font-size: 4rem;
        line-height: 5.6rem;
        font-family: "Montserrat", sans-serif;
    }
    &.hatemen-h2 {
        color: var(--primary);
        font-weight: 700;
        font-size: 3.2rem;
        line-height: 4rem;
        font-family: "Montserrat", sans-serif;
    }
    &.hatemen-h3 {
        color: var(--primary);
        font-weight: 600;
        font-size: 2rem;
        line-height: 2.2rem;
        font-family: "Montserrat", sans-serif;
    }
    &.hatemen-h4 {
        color: var(--primary);
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 2rem;
        font-family: "Montserrat", sans-serif;
    }
    &.hatemen-h5 {
        color: var(--primary);
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 2.8rem;
        font-family: "Montserrat", sans-serif;
    }
    &.hatemen-body {
        color: var(--secondary);
        font-size: 1.4rem;
        line-height: 2rem;
        font-family: "Montserrat", sans-serif;
    }
    &.hatemen-body1 {
        color: var(--secondary);
        font-size: 1rem;
        line-height: 1.4rem;
        font-family: "Montserrat", sans-serif;
    }
    &.hatemen-body2 {
        color: var(--secondary);
        font-size: 4rem;
        line-height: 5.6rem;
        font-family: "Montserrat", sans-serif;
    }
    &.hatemen-body3 {
        color: var(--secondary);
        font-size: 1.6rem;
        line-height: 2.8rem;
        font-family: "Montserrat", sans-serif;
    }
    &.hatemen-body4 {
        color: var(--secondary);
        font-size: 1.2rem;
        line-height: 2.8rem;
        font-family: "Montserrat", sans-serif;
    }
    &.hatemen-body5 {
        color: var(--secondary);
        font-size: 2rem;
        line-height: 2.8rem;
        font-family: "Montserrat", sans-serif;
    }
    &.hatemen-body6 {
        color: var(--secondary);
        font-size: 1.8rem;
        line-height: 2.6rem;
        font-family: "Montserrat", sans-serif;
    }
    &.hatemen-label1 {
        color: var(--secondary);
        font-size: 2rem;
        font-weight: 400;
        line-height: 2.8rem;
        font-family: "Montserrat", sans-serif;
    }
`;
