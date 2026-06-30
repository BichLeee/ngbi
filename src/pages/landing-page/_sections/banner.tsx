import styled from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useContext, useRef } from "react";

import { AppContext } from "@/contexts/appContext";

const HERO_IMG = "https://images.unsplash.com/photo-1781720208654-91d5dfebf8ae?w=1600&h=1000&fit=crop&auto=format";

export const Banner = () => {
    const heroRef = useRef<HTMLElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const tagRef = useRef<HTMLParagraphElement>(null);

    const { introHasPlayed, setIntroHasPlayed } = useContext(AppContext);
    const shouldOverlay = !introHasPlayed;
    const tagline = "aka Sophie. A Frontend Developer from Vietnam, based in HCM, Vietnam.";

    useGSAP(
        () => {
            // Hero image parallax
            if (imgRef.current && heroRef.current) {
                gsap.fromTo(
                    imgRef.current,
                    { y: "0%" },
                    {
                        y: "-20%",
                        ease: "none",
                        scrollTrigger: { trigger: heroRef.current, scrub: true, start: "top top", end: "bottom top" },
                    },
                );
            }

            const first = !introHasPlayed;
            if (first && overlayRef.current) {
                gsap.to(overlayRef.current, { xPercent: -100, duration: 1.5, ease: "expo.inOut", delay: 0.3 });
                setIntroHasPlayed(true);
            }

            const nd = first ? 0.9 : 0.1;
            const td = first ? 1.5 : 0.38;

            const letters = nameRef.current?.querySelectorAll(".name-letter");
            if (letters?.length) {
                gsap.fromTo(
                    letters,
                    { y: 90, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.6, stagger: 0.055, ease: "expo.out", delay: nd },
                );
            }
            const words = tagRef.current?.querySelectorAll(".tagline-word");
            if (words?.length) {
                gsap.fromTo(
                    words,
                    { y: 18, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.9, stagger: 0.045, ease: "power3.out", delay: td },
                );
            }
        },
        { scope: heroRef },
    );

    return (
        <div>
            {shouldOverlay && <IntroOverlay ref={overlayRef} />}
            <Hero ref={heroRef}>
                <HeroImage ref={imgRef} src={HERO_IMG} alt="NgocBich — Sophie" />
                <HeroOverlay />
                <HeroBottom>
                    <HeroName ref={nameRef}>
                        {"NgocBich".split("").map((c, i) => (
                            <span key={i} className="name-letter" style={{ opacity: 0 }}>
                                {c}
                            </span>
                        ))}
                    </HeroName>
                    <HeroTagline ref={tagRef}>
                        {tagline.split(" ").map((w, i) => (
                            <span key={i} className="tagline-word" style={{ opacity: 0 }}>
                                {w}{" "}
                            </span>
                        ))}
                    </HeroTagline>
                </HeroBottom>
            </Hero>
            <MobileTagline>{tagline}</MobileTagline>
        </div>
    );
};

const IntroOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 200;
    background: var(--bg);
    pointer-events: none;
`;

const Hero = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background: #1c1410;
`;

const HeroImage = styled.img`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
`;

const HeroOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.9) 100%);
`;

const HeroBottom = styled.div`
    position: absolute;
    width: 100%;
    height: fit-content;
    bottom: 10px;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--px);
`;

const HeroName = styled.h1`
    font-family: var(--font-display);
    font-weight: 800;
    color: white;
    line-height: 1;
    letter-spacing: -0.02em;
    font-size: clamp(3rem, 10vw, 9rem);
    display: flex;
    overflow: visible;
`;

const HeroTagline = styled.p`
    font-family: var(--font-sans);
    font-size: 13px;
    line-height: 1.68;
    color: rgba(255, 255, 255, 0.68);
    text-align: right;
    max-width: 188px;
    padding-bottom: 4px;
    flex-shrink: 0;
    @media (max-width: 600px) {
        .hero-tagline {
            display: none;
        }
    }
`;

const MobileTagline = styled.p`
    display: none;
    background: var(--bg);
    padding: 20px var(--px) 0;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.65;
    @media (max-width: 600px) {
        display: block;
    }
`;
