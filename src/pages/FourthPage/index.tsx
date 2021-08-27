import React from "react";
import img from "../../assets/img4.svg"
import imgSherpax from "../../assets/sherpax.svg"

import styled from 'styled-components';



function FourthPage(): React.ReactElement
{
    const TitleContent = styled.div`
        width: 412px;
        height: 76px;
        font-size: 32px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
        color: #333333;
        line-height: 38px;
    `;
    const ContentSherpaX = styled.div`
        width: 465px;
        height: 144px;
        font-size: 16px;
        font-family: Helvetica-Light, Helvetica;
        font-weight: 300;
        color: #333333;
        line-height: 24px;
        margin-top:42px;
    `;
    return (
        <div className="flex flex-row justify-between px-15 pt-74.5 ">
            <div className="w-97.25 h-97.25">
                <img src={img} alt="" />
            </div>
            <div className="flex flex-col justify-center mt-22-">
                <TitleContent>More Open Blockchain Network</TitleContent>
                <ContentSherpaX>
                    With a more open blockchain network, SherpaX developers will be able to use both Substrate - and EVM-compatible development environments. Developers familiar with EVM's development tools will be able to easily deploy their applications on top of the SherpaX network and share security with the Kusama network.
                </ContentSherpaX></div>
        </div>
    );
}

export default FourthPage;
