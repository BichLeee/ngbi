import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { LandingPage, Experience, Projects } from "pages";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

import { MainLayout } from "components/layouts/MainLayout";
import { ROUTES } from "./utils/route";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MorphSVGPlugin);

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    useEffect(() => {
        const smoother = ScrollSmoother.create({
            smooth: 1.5,
            effects: true,
            smoothTouch: 0.1,
        });

        return () => smoother.kill();
    }, []);

    return (
        <div id="smooth-wrapper">
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route
                        path={ROUTES.LANDING}
                        element={
                            <MainLayout>
                                <LandingPage />
                            </MainLayout>
                        }
                    />
                    <Route
                        path={ROUTES.EXPERIENCE}
                        element={
                            <MainLayout>
                                <Experience />
                            </MainLayout>
                        }
                    />
                    <Route
                        path={ROUTES.PROJECTS}
                        element={
                            <MainLayout>
                                <Projects />
                            </MainLayout>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
