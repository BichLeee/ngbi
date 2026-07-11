import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styled from "styled-components";

export const ParallaxBand = ({
    src,
    alt,
    height = "56vh",
    overlayOpacity = 0.58,
    children,
}: {
    src: string;
    alt: string;
    height?: string;
    overlayOpacity?: number;
    children?: React.ReactNode;
}) => {
    const bandRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useGSAP(
        () => {
            if (!imgRef.current || !bandRef.current) return;
            gsap.fromTo(
                imgRef.current,
                { y: "-15%" },
                {
                    y: "15%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: bandRef.current,
                        scrub: true,
                        start: "top bottom",
                        end: "bottom top",
                    },
                },
            );
        },
        { scope: bandRef },
    );

    return (
        <ParallaxBandContainer ref={bandRef} style={{ height }}>
            <ParallaxBandImage ref={imgRef} src={src} alt={alt} style={{ opacity: overlayOpacity }} />
            {children && <ParallaxBandContent>{children}</ParallaxBandContent>}
        </ParallaxBandContainer>
    );
};

const ParallaxBandContainer = styled.div`
    position: relative;
    overflow: hidden;
    background: #0a0a0a;
`;

const ParallaxBandImage = styled.img`
    width: 100%;
    height: 130%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: -15%;
    left: 0;
    will-change: transform;
`;

const ParallaxBandContent = styled.div`
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 var(--px);
`;
