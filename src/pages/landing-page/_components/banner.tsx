import styled from "styled-components";

import bannerImage from "assets/images/banner.jpg";

export const Banner = () => {
    return (
        <div>
            <BannerImage src={bannerImage} />
        </div>
    );
};

const BannerImage = styled.img`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

