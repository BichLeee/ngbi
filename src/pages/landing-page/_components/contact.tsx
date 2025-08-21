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
            <Row gutter={[20, 20]} wrap style={{ height: "100%" }}>
                <Col md={24} lg={10} style={{ width: "100%" }}>
                    <Flex gap={20} vertical justify="center" align="center">
                        <Image src={contactImage1} />
                        <Image src={contactImage2} />
                    </Flex>
                </Col>
                <Col md={24} lg={14}>
                    <ContactContent gap={20} vertical justify="center">
                        <Typography variant="h3">Contact</Typography>
                        <Typography variant="h1" color="#fff">
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
                    </ContactContent>
                </Col>
            </Row>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    min-height: calc(100vh - 85px);
    position: relative;
    padding-inline: var(--page-padding);
`;

const Image = styled.img`
    height: 50%;
    max-height: 300px;
    max-width: 400px;
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
    margin: 0 auto;
`;

const Linkedin = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
`;

const ContactContent = styled(Flex)`
    padding: 100px;
    height: 100%;

    @media (max-width: 1000px) {
        padding-inline: var(--page-padding);
    }
`;
