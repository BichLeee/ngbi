import React from "react";
import styled from "styled-components";

import { Header, Footer } from "./_components";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Container>
            <div style={{ position: "relative", zIndex: 1 }}>
                <Header />
                <Content>{children}</Content>
            </div>
            <Footer />
        </Container>
    );
};

const Container = styled.div`
    padding-bottom: 200px;
`;

const Content = styled.div`
    background: #141414;
`;
