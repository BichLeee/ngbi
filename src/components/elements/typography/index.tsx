import React from "react";
import { Typography as AntTypography } from "antd";
import styled from "styled-components";

const { Paragraph } = AntTypography;

type TypographyProps = {
    children: React.ReactNode;
    variant?:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "body"
        | "body1"
        | "body2"
        | "body3"
        | "body4"
        | "body5"
        | "label1";
    rootClassName?: string;
    style?: React.CSSProperties;
    align?: React.CSSProperties["textAlign"];
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
    align = "left",
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

    let inline = { textAlign: align, ...style } as React.CSSProperties;

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
        margin: 0 !important;
    }
    &.hatemen-h1 {
        color: var(--primary);
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
    }
    &.hatemen-h2 {
        color: var(--primary);
        font-weight: 600;
        font-size: 18px;
        line-height: 36px;
    }
    &.hatemen-h3 {
        color: var(--primary);
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
    }
    &.hatemen-h4 {
        color: var(--primary);
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
    }
    &.hatemen-body {
        color: var(--primary);
        font-size: 14px;
        line-height: 20px;
    }
    &.hatemen-body1 {
        color: var(--primary);
        font-size: 10px;
        line-height: 14px;
    }
    &.hatemen-body2 {
        color: var(--textSecondary);
        font-size: 14px;
        line-height: 20px;
    }
    &.hatemen-label1 {
        color: var(--primary);
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
    }
`;
