import React from "react";
import img from "../../assets/img4.svg"
import imgSherpax from "../../assets/sherpax.svg"

import styled from 'styled-components';



function FourthPage(): React.ReactElement
{
    const ImgBoxLeft = styled.div`
        width:35.93rem;
        height:35.93rem;
        padding-left:2.625rem;
        margin-right:2.625rem;
    `;
    const TitleContent = styled.div`
        max-width:25.75rem;
        font-size:32px;
        font-family:Helvetica-Bold, Helvetica;
        font-weight:bold;
        color:#333333;
        line-height:38px;
    `;
    const ContentSherpaX = styled.div`
        max-width:29.06rem;
        font-size:16px;
        font-family:Helvetica-Light, Helvetica;
        font-weight:300;
        color:#333333;
        line-height:24px;
        margin-top:42px;
    `;
    return (
        <div className="flex flex-row justify-center pt-74.5 ">
            <ImgBoxLeft>
                <img src={img} alt="" />
            </ImgBoxLeft>
            <div className="flex flex-col justify-start">
                <TitleContent>More Open Blockchain Network</TitleContent>
                <ContentSherpaX>
                    With a more open blockchain network, SherpaX developers will be able to use both EVM and WASM to create DeFi applications. Developers familiar with EVM's development tools will be able to easily deploy their applications on top of the SherpaX network and share security with the Kusama network.
                </ContentSherpaX></div>
        </div>
    );
}

export default FourthPage;
