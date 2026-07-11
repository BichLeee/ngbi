import React, { useRef } from "react";
import { AppProvider } from "@/contexts/appContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Banner, AboutMe, Highlight, NgBi, Skills, Projects, Contact } from "./_sections";
import styled from "styled-components";
import { ParallaxBand } from "@/components/modules";

gsap.registerPlugin(ScrollTrigger, useGSAP);



export const LandingPage = () => {
    const IMG = {
        lanterns: "https://images.unsplash.com/photo-1743094038414-e6decfd78b36?w=1800&h=1000&fit=crop&auto=format",
        street: "https://images.unsplash.com/photo-1762326723296-5f482668bc69?w=1800&h=1000&fit=crop&auto=format",
    };
    return (
        <AppProvider>
            <Banner />
            <AboutMe />

            <ParallaxBand
                src={IMG.lanterns}
                alt="Vietnamese traditional architecture lit with lanterns at night"
                height="62vh"
                overlayOpacity={0.52}
            >
                <ParallaxBandText>
                    <ParallaxBandLabel>Based in</ParallaxBandLabel>
                    <ParallaxBandHeading>
                        Ho Chi Minh City,
                        <br />
                        Vietnam
                    </ParallaxBandHeading>
                    <ParallaxBandSub>
                        Growing up surrounded by Vietnamese culture and architecture shapes how I think about design —
                        with richness, intention, and care.
                    </ParallaxBandSub>
                </ParallaxBandText>
            </ParallaxBand>

            <Highlight />
            <NgBi />

            <ParallaxBand
                src={IMG.street}
                alt="Vietnamese street illuminated at night"
                height="50vh"
                overlayOpacity={0.62}
            >
                <ParallaxBandText>
                    <ParallaxBandLabel>Currently</ParallaxBandLabel>
                    <ParallaxBandHeading>
                        Open to
                        <br />
                        new roles
                    </ParallaxBandHeading>
                </ParallaxBandText>
            </ParallaxBand>

            <Skills />
            {/* <Projects /> */}
            <Contact />
        </AppProvider>
    );
};
const ParallaxBandText = styled.div`
    max-width: 640px;
`;

const ParallaxBandLabel = styled.p`
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: rgba(255, 255, 255, 0.35);
    margin-bottom: 20px;
`;

const ParallaxBandHeading = styled.h3`
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(2rem, 4vw, 4rem);
    color: white;
    line-height: 1.1;
    margin-bottom: 16px;
`;

const ParallaxBandSub = styled.p`
    font-family: var(--font-sans);
    font-size: 14px;
    color: rgba(255, 255, 255, 0.45);
    line-height: 1.7;
    max-width: 400px;
`;
