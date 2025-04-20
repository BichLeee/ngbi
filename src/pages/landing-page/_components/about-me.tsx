import { Col, Flex, Row } from "antd";
import styled from "styled-components";

import { Typography } from "components/elements";
import image1 from "assets/images/NB1.jpg";
import image2 from "assets/images/NB2.jpg";
import { ScribbleCircle } from "assets/svgs/scribble-circle.svg";

export const AboutMe = () => {
    return (
        <Container>
            <Row gutter={[20, 20]} style={{ height: "100%" }}>
                <Col xs={12}>
                    <Flex gap={20} vertical justify="center" style={{ padding: "100px", height: "100%" }}>
                        <Typography variant="h5">About me</Typography>
                        <Typography variant="h2" color="#fff">
                            Hey there,{" "}
                            <span style={{ position: "relative" }}>
                                I’m Bich <StyledCircle />
                            </span>
                        </Typography>
                        <Typography>
                            Hi! I'm a frontend website developer with a passion for building clean, responsive, and
                            user-friendly web interfaces. I'm currently open for freelance opportunities and have
                            hands-on experience working with CMS tools like Drupal. Whether it's creating a custom site
                            or improving an existing one, I focus on delivering quality results that meet client goals.
                            😁
                        </Typography>
                    </Flex>
                </Col>
                <Col xs={12}>
                    <BackgroundImage />
                    <Image />
                </Col>
            </Row>
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

const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    margin-left: 20%;

    background-image: url(${image1});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 350px 0;
`;

const Image = styled.div`
    height: 50vh;
    width: 250px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 4px;

    background-image: url(${image2});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const StyledCircle = styled(ScribbleCircle)`
    position: absolute;
    width: 136%;
    height: 114%;
    top: -7%;
    left: -18%;
`;
