import styled from "styled-components";

import { Header } from "./_components/header";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <Content>{children}</Content>
        </>
    );
};

const Content = styled.div``;
