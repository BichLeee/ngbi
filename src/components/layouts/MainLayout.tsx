import styled from "styled-components";

import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

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
