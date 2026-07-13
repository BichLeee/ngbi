import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import styled from "styled-components";

const CIRCLE_OFFSETS = [
    [-110, -70],
    [95, -55],
    [-80, 55],
    [120, 65],
    [-55, -120],
    [65, 110],
    [-130, 25],
    [105, -95],
];

export const DotTransition = () => {
    const secRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(
        () => {
            const circles = circleRefs.current.filter(Boolean) as HTMLDivElement[];
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: secRef.current,
                    start: "top 65%",
                    toggleActions: "play none none reverse",
                },
            });

            // Converge all circles to center
            tl.to(circles, {
                x: 0,
                y: 0,
                duration: 0.85,
                stagger: 0.04,
                ease: "power3.inOut",
            });

            // Scale up + fade
            tl.to(
                circles,
                {
                    scale: 4,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.02,
                    ease: "power2.out",
                    // repeat: -1,
                    // yoyo: true,
                    // repeatDelay: 0.1,
                },
                "+=0.06",
            );

            // Final dot appears and pulses out
            tl.fromTo(
                dotRef.current,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.25, ease: "back.out(3)"},
                "-=0.35",
            );
            // tl.to(
            //     dotRef.current,
            //     {
            //         scale: 5,
            //         opacity: 0,
            //         duration: 0.6,
            //         ease: "power2.out",
            //     },
            //     "+=0.18",
            // );
        },
        { scope: secRef },
    );

    return (
        <DotTransitionWrapper ref={secRef} className="dot-transition">
            <DotTransitionCenter className="dot-transition-center">
                {CIRCLE_OFFSETS.map(([ox, oy], i) => (
                    <ConvCircle
                        key={i}
                        ref={(el) => {
                            circleRefs.current[i] = el;
                        }}
                        className="conv-circle"
                        style={{ transform: `translate(calc(-50% + ${ox}px), calc(-50% + ${oy}px))` }}
                    />
                ))}
                <ConvDot ref={dotRef} className="conv-dot" />
            </DotTransitionCenter>
        </DotTransitionWrapper>
    );
};

const DotTransitionWrapper = styled.div`
    position: relative;
    height: 160px;
    /* background: var(--bg); */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;
const DotTransitionCenter = styled.div`
    position: relative;
    width: 8px;
    height: 8px;
`;
const ConvCircle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.55);
    transform: translate(-50%, -50%);
    will-change: transform;
`;
const ConvDot = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: white;
    transform: translate(-50%, -50%) scale(0);
    will-change: transform, opacity;
`;
