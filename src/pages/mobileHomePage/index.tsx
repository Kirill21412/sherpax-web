import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Background from "../../components/Background/BackgroundMobile";
import FooterMobile from "../../components/Footer/FooterMobile";
import HeaderMobile from "../../components/HeaderMobile";
import FirstPage from "../FirstPage/MobileFirst";

const MobileHomePage = () =>
{
    const FitMedia = styled.div`
    margin: 0 auto;
    max-width:1280px;
    position: relative;
`;

    return (
        <>
            <HeaderMobile />
            <Background />
            <FitMedia>
                <FirstPage />
            </FitMedia>
            {/* <FooterMobile /> */}
        </>
    )
}

export default MobileHomePage