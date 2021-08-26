import React from "react";
import img from "../../assets/img3.svg"
import imgSherpax from "../../assets/sherpax.svg"

import styled from 'styled-components';



function ThirdPage(): React.ReactElement
{
    const TitleContent = styled.div`
        width: 412px;
        height: 76px;
        font-size: 32px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 38px;
    `;
    const ContentSherpaX = styled.div`
        width: 442px;
        height: 96px;
        font-size: 16px;
        font-family: Helvetica-Light, Helvetica;
        font-weight: 300;
        color: #FFFFFF;
        line-height: 24px;
        margin-top:42px;
    `;
    return (
        <div className="flex flex-row justify-between px-15 pt-30">
            <div className="flex flex-col justify-center px-15">
                <TitleContent>Bitcoin Threshold Signature Tool</TitleContent>
                <ContentSherpaX>Aggregation Signature technology based on Schnorr Signature, which will be used in the new cross-chain scheme of XBTC. We will develop a lightweight and fast bitcoin threshold signature tool for the ComingChat app.</ContentSherpaX></div>
            <div className="w-106 h-112">
                <img src={img} alt="" />
            </div>
        </div>
    );
}

export default ThirdPage;
