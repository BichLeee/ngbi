import styled from "styled-components";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { TooltipRadix } from "@/components/radix";
import { Section } from "../_components";
import { checkDesktopWidth } from "@/utils/helper";

const CONTACT_LINKS = [
    { label: "GitHub", href: "https://github.com/BichLeee", tooltip: "View GitHub profile" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bích-lê-sophie", tooltip: "Connect on LinkedIn" },
    { label: "Email", href: "mailto:bich1042002@gmail.com", tooltip: "Send an email" },
    { label: "Phone", href: "tel:+84774777162", tooltip: "Send a message" },
    { label: "Ho Chi Minh City", href: "https://maps.app.goo.gl/EhLdJXkk5rwZUTjx6", tooltip: "Based in Vietnam" },
];

export const Contact = () => {
    const secRef = useRef<HTMLElement>(null);

    const isDesktop = checkDesktopWidth();

    useGSAP(
        () => {
            const startPos = window.innerHeight - (secRef.current?.clientHeight ?? 0) + 100;
            if (isDesktop) {
                gsap.fromTo(
                    secRef.current,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: secRef.current,
                            start: `top-=${startPos}px top`,
                            end: "top top",
                            toggleActions: "play none none reverse",
                            // markers: true,
                        },
                    },
                );
            }
            // gsap.fromTo(
            //     ".contact-btn",
            //     { y: 20, opacity: 0 },
            //     {
            //         y: (secRef.current?.clientHeight ?? 0) * -1,
            //         opacity: 1,
            //         duration: 0.6,
            //         stagger: 0.08,
            //         ease: "power3.out",
            //         scrollTrigger: { trigger: ".contact-links", start: "top 88%", toggleActions: "play none none reverse" },
            //     },
            // );
        },
        { scope: secRef },
    );

    return (
        <div style={{ background: "#000" }}>
            <Section
                secRef={secRef}
                heading="Get in Touch"
                preHeading="Get in"
                headingProps={{ style: { fontSize: "clamp(2.2rem, 6vw, 6rem)", opacity: 1 }, className: "ct-heading" }}
            >
                <ContactIntro style={{paddingBottom: isDesktop ? "150px" : "50px"}}>
                    Open to new opportunities, collaborations, and interesting projects. Feel free to reach out — I&apos;d love to hear from you.
                </ContactIntro>
                {!isDesktop && (
                    <ContactLinks className="contact-links">
                        {CONTACT_LINKS.map((c) => (
                            <TooltipRadix key={c.label} label={c.tooltip}>
                                <ContactBtn className="contact-btn" href={c.href} target="_blank" rel="noopener noreferrer">
                                    {c.label}
                                </ContactBtn>
                            </TooltipRadix>
                        ))}
                    </ContactLinks>
                )}
            </Section>
        </div>
    );
};

const ContactIntro = styled.p`
    color: rgba(255, 255, 255, 0.34);
    font-size: 15px;
    max-width: 520px;
    line-height: 1.82;
    padding-bottom: 50px;
`;
const ContactLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 100px;
`;
const ContactBtn = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--border);
    padding: 8px 14px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    cursor: pointer;
    background: none;
    transition:
        border-color 0.3s,
        color 0.3s;
    text-decoration: none;
    &:hover {
        border-color: rgba(255, 255, 255, 0.36);
        color: rgba(255, 255, 255, 0.9);
    }
`;
