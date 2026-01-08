import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ConfigProvider } from "antd";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { LandingPage, Experience } from "pages";
import { MainLayout } from "components/layouts/MainLayout";
import "./App.css";
import { Projects } from "pages/projects";
import { useEffect } from "react";

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top instantly
        window.scrollTo(0, 0);
    }, [pathname]); // Runs whenever the route changes

    return null; // This component doesn't render anything
}

function App() {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        // defaultColor: "#d9d9d9",
                        // colorPrimary: "var(--background)",
                        // colorPrimaryHover: "var(--bgHoverColorButton)",
                        // colorPrimaryActive: "#0000001a",
                        // textHoverBg: "#0000001a",
                        // colorPrimaryBg: "var(--bgColorButton)",
                        // contentFontSizeSM: 10,
                        // contentLineHeightSM: 1.5,
                        paddingBlockSM: 8,
                        paddingInlineSM: 12,
                        controlHeightSM: 30,
                        // contentFontSize: 12,
                        // contentLineHeight: 1.5,
                        paddingBlock: 10,
                        paddingInline: 24,
                        controlHeight: 36,
                        // contentFontSizeLG: 14,
                        // contentLineHeightLG: 22 / 14,
                        // paddingBlockLG: 13,
                        // paddingInlineLG: 32,
                        // controlHeightLG: 40,
                    },
                },
            }}
        >
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <BrowserRouter>
                        <ScrollToTop />
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <MainLayout>
                                        <LandingPage />
                                    </MainLayout>
                                }
                            />
                            <Route
                                path="/exp"
                                element={
                                    <MainLayout>
                                        <Experience />
                                    </MainLayout>
                                }
                            />
                            <Route
                                path="/projects"
                                element={
                                    <MainLayout>
                                        <Projects />
                                    </MainLayout>
                                }
                            />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </ConfigProvider>
    );
}

export default App;
