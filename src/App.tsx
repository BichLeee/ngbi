import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { LandingPage, Experience } from "pages";
import { MainLayout } from "components/layouts/MainLayout";
import { Projects } from "pages/projects";
import { useEffect } from "react";

// gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
    smoothTouch: 0.1,
});

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
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
    );
}

export default App;
