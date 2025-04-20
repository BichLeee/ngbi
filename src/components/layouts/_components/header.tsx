import { Flex } from "antd";
import classNames from "classnames/bind";

import logo from "assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { LogoInstagram, LogoLinkedin, LogoMail, LogoPhone } from "assets/svgs";
import styles from "./header.module.scss";

const cx = classNames.bind(styles);

const ContactItem = ({ icon, link }: { icon: React.ReactNode; link: string }) => {
    return (
        <Link className={cx("contact-item")} to={link || "#"} target="_blank">
            <span className={cx("icon-prev")}>{icon}</span>
            <span className={cx("icon-hover")}>{icon}</span>
        </Link>
    );
};

export const Header = () => {
    const { pathname } = useLocation();

    return (
        <header className={cx("container")}>
            <div className={cx("inner")}>
                <img src={logo} className={cx("logo")} />
                <nav className={cx("nav")}>
                    <Link className={cx("nav-item", { active: pathname === "/" })} to="/">
                        Overview
                    </Link>
                    <Link className={cx("nav-item", { active: pathname === "/projects" })} to="/projects">
                        Detail
                    </Link>
                    <Flex align="center" gap={16}>
                        <ContactItem icon={<LogoLinkedin />} link="https://www.linkedin.com/in/bích-lê-sophie" />
                        <ContactItem icon={<LogoInstagram />} link="https://www.instagram.com/biccccc_" />
                        <ContactItem icon={<LogoPhone />} link="tel:+84774777162" />
                        <ContactItem icon={<LogoMail />} link="mailto:bich1042002@gmail.com" />
                    </Flex>
                </nav>
            </div>
        </header>
    );
};
