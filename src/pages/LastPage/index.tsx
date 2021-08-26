import React from "react";
import img from "../../assets/img5.svg"
import imgSherpax from "../../assets/sherpax.svg"

import styled from 'styled-components';



function LastPage(): React.ReactElement
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
        width: 412px;
        height: 72px;
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
                <TitleContent>Decentralized NFT Auction Platform</TitleContent>
                <ContentSherpaX>
                    ComingChat, a decentralized NFT auction platform based on smart contracts, has so far issued more than 120,000 NFT.
                </ContentSherpaX></div>
            <div className="w-153 h-103.25">
                <img src={img} alt="" />
            </div>
        </div>
    );
}

export default LastPage;
