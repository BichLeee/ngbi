import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";

import { LandingPage, Experience } from "pages";
import { MainLayout } from "components/layouts/MainLayout";
import "./App.css";
import gsap from "gsap";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollTrigger);

function App() {
    // useGSAP(() => {
    //     if (typeof window !== "undefined") {
    //         const smoother = ScrollSmoother.create({
    //             smooth: 2,
    //             effects: true,
    //             normalizeScroll: true,
    //         });

    //         return () => {
    //             smoother.kill();
    //         };
    //     }
    // }, []);

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
                        // paddingBlockSM: 8,
                        // paddingInlineSM: 20,
                        // controlHeightSM: 32,
                        // contentFontSize: 12,
                        // contentLineHeight: 1.5,
                        // paddingBlock: 10,
                        // paddingInline: 24,
                        // controlHeight: 36,
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
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </ConfigProvider>
    );
}

export default App;
