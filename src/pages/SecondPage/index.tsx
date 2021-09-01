import React from "react";
import img from "../../assets/img2.svg";
import imgSherpax from "../../assets/sherpax.svg";

import styled from "styled-components";

function SecondPage(): React.ReactElement
{

    const ImgBoxLeft = styled.div`
        width:35.93rem;
        height:35.93rem;
        padding-left:2.625rem;
        margin-right:2.625rem;
    `;
    const ImgBoxRight = styled.div`
        display:flex;
        flex-direction:column;
        margin:auto 0;
        justify-content:start;
        padding-right:2.625rem;
`;
    const ImgBoxTitle = styled.div`
//         padding-left:6.25rem;
//         padding-right:25.875rem;
    `;
    const ContentSherpaX = styled.div`
        max-width:29rem;
        font-size:16px;
        font-family:Helvetica-Light, Helvetica;
        font-weight:300;
        color:#333333;
        line-height:24px;
        margin-top:42px;
  `;
    return (
        <div className="flex flex-row pt-52">
            <ImgBoxLeft>
                <img src={img} alt="" />
            </ImgBoxLeft>
            <ImgBoxRight>
                <ImgBoxTitle>
                    <img src={imgSherpax} alt="" />
                </ImgBoxTitle>
                <ContentSherpaX>
                    SherpaX, the canary network of ChainX, functions as a 'sherpa'. Sherpas are members of an ethnic group in the Himalayas who are famous for their mountaineering and navigation skills that guide climbers through unknown dangers and threatening situations. SherpaX will have the same responsibility and will test new innovative ideas and technological experiments first before they are elevated to ChainX.
                </ContentSherpaX>
            </ImgBoxRight>
        </div >
    );
}

export default SecondPage;
