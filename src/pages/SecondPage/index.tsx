import React from "react";
import img from "../../assets/img2.svg"
import imgSherpax from "../../assets/sherpax.svg"

import styled from 'styled-components';



function FirstPage(): React.ReactElement
{
    const ContentSherpaX = styled.div`
        width: 465px;
        height: 168px;
        font-size: 16px;
        font-family: Helvetica-Light, Helvetica;
        font-weight: 300;
        color: #333333;
        line-height: 24px;
        margin-top:42px;
    `;
    return (
        <div className="flex flex-row justify-between pt-40">
            <div className="w-143.75 h-143.75">
                <img src={img} alt="" />
            </div>
            <div className="flex flex-col justify-center">
                <img src={imgSherpax} alt="" className="w-38 mt-15" />
                <ContentSherpaX>SherpaX, functions as a guide to ChainX as Sherpas, members of an ethnic group in the Himalayas who are famous for their mountaineering skills, navigate through unknow dangers and complicated situations to guide climbers safely to the peak. Therefore, new innovative ideas and technological experiments will be first carried out on SherpaX as it bears remarkable resemblance to ChainX in terms of design.</ContentSherpaX>
            </div>
        </div>
    );
}

export default FirstPage;
