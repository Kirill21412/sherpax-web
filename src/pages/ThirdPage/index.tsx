import React from "react";
import img from "../../assets/img3.svg"
import imgSherpax from "../../assets/sherpax.svg"

import styled from 'styled-components';



function ThirdPage(): React.ReactElement
{
    const TitleContent = styled.div`
        max-width: 25.75rem;
        font-size: 32px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 38px;
    `;
    const ContentSherpaX = styled.div`
        max-width: 27.625rem;
        font-size:16px;
        font-family:Helvetica-Light, Helvetica;
        font-weight:300;
        color:#ffffff;
        line-height:24px;
        margin-top:42px;
    `;


    return (
        <div className="flex flex-row justify-center pt-6.5">
            <div className="flex flex-col justify-start" style={{ marginTop: '11rem', minWidth: '38rem' }}>
                <TitleContent>Bitcoin Threshold Signature Tool</TitleContent>
                <ContentSherpaX>
                    Aggregation Signature technology based on Schnorr Signature, which will be used in the new cross-chain scheme of XBTC. We will develop a lightweight and fast bitcoin threshold signature tool for the ComingChat app, enabling lightning fast XBTC transfers and DeFi applications.</ContentSherpaX></div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
}

export default ThirdPage;
