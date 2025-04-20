import { Flex } from "antd";
import styled from "styled-components";

import { Typography } from "components/elements";
import hcmus from "assets/images/hcmus.jpg";
import drcom from "assets/images/drcom.png";
import avianjet from "assets/images/avianjet.png";
import hcmus_logo from "assets/images/hcmus-logo.png";
import drcom_logo from "assets/images/drcom-logo.png";
import avianjet_logo from "assets/images/avian-logo.png";

export const Highlight = () => {
    return (
        <Container>
            <Carousel>
                <Card img={hcmus}>
                    <Flex vertical gap={20} justify="center">
                        <img src={hcmus_logo} alt="hcmus-logo" width={75} />
                        <Typography variant="label1">
                            HCMUS
                            <br />
                            University of Science
                        </Typography>
                        <Typography variant="body">
                            <b>Software Engineer</b>
                            <br />
                            09/2020 - 09/2024
                        </Typography>
                    </Flex>
                </Card>
                <Card img={drcom}>
                    <Flex vertical gap={20} justify="center">
                        <img src={drcom_logo} alt="drcom-logo" width={75} />
                        <Typography variant="label1">DRCOM</Typography>
                        <Typography variant="body">
                            <b>Intern Developer</b>
                            <br />
                            08/2023 - 03/2024
                        </Typography>
                    </Flex>
                </Card>
                <Card img={avianjet}>
                    <Flex vertical gap={20} justify="center">
                        <img src={avianjet_logo} alt="drcom-logo" width={65} />
                        <Typography variant="label1">AVIAN SOLUTIONS</Typography>
                        <Typography variant="body">
                            <b>Frontend Developer</b>
                            <br />
                            12/2024 - Present
                        </Typography>
                    </Flex>
                </Card>
            </Carousel>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 85px);
    position: relative;
    margin-top: calc(100vw * 0.13);
    margin-bottom: calc(100vw * 0.06);
`;

const Card = styled.div<{ img: string }>`
    position: relative;
    overflow: hidden;
    z-index: 0;
    height: 450px;
    width: calc((100% - 40px) / 3);
    border-radius: 4px;
    padding: 50px;
    cursor: pointer;
    transition: opacity 0.3s ease, transform 0.3s ease;
    display: flex;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url(${({ img }) => img});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.5;
        z-index: -1;
    }

    &:hover {
        opacity: 1;
        transform: scale(1.1);
    }
`;

const Carousel = styled.div`
    display: flex;

    gap: 20px;
    padding-inline: 8%;
`;
