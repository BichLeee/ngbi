import { Col, Flex, Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Typography } from "components/elements";
import contactImage1 from "assets/images/contact1.jpg";
import contactImage2 from "assets/images/contact2.png";
import linkedin from "assets/images/linkedin.png";

export const Contact = () => {
    return (
        <Container>
            <Row gutter={[20, 20]} style={{ height: "100%" }}>
                <Col xs={10}>
                    <Flex gap={20} vertical justify="center" align="center">
                        <Image src={contactImage1} />
                        <Image src={contactImage2} />
                    </Flex>
                </Col>
                <Col xs={14}>
                    <Flex gap={20} vertical justify="center" style={{ padding: "100px", height: "100%" }}>
                        <Typography variant="h5">Contact</Typography>
                        <Typography variant="h2" color="#fff">
                            Ready to <span style={{ position: "relative" }}>dive in?</span>
                        </Typography>
                        <Typography>
                            If you’re aiming for a frontend that not only looks great but performs flawlessly, I’m here
                            to make it happen. With a keen eye for detail and a passion for user experience, I promise
                            to bring your vision to life—clean, responsive, and ready to impress. Let’s build something
                            remarkable together.
                        </Typography>
                        <Link target="_blank" to="https://www.linkedin.com/in/b%C3%ADch-l%C3%AA-sophie/">
                            <Linkedin src={linkedin} />
                        </Link>
                    </Flex>
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

const Image = styled.img`
    height: 50%;
    max-height: 300px;
    max-width: 400px;
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
`;

const Linkedin = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
`;
