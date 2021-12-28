import React from "react";
import bg_circle from "../../assets/bg_1.svg"
import circle from "../../assets/img1.png"
import styled from 'styled-components';
import { copy } from "../../helps/copy";



function FirstPage(): React.ReactElement
{
    const SherpaXTitle = styled.div`
    font-size: 4.25rem;
    font-family: Helvetica-Bold, Helvetica;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 5.25rem;
    background: linear-gradient(148deg, #BE15B8 0%, #33C8F5 54%, #FFFFFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `;

    const ContentDiv = styled.div`
        width: 35.875rem;
        height: 6rem;
        font-size: 1.375rem;
        font-family: Helvetica-Light, Helvetica;
        font-weight: 300;
        color: #FFFFFF;
        line-height: 2rem;
    `;

    const BgDiv = styled.div`
        width:37.5rem;
        height:30.125rem;
        z-index:-1;
        position:absolute;
        top:1rem;
        right:0;
    `;

    const Bgcontent = styled.div`
        width:28.5rem;
        height:21.125rem;
        top: 5.125rem;
        z-index:-1;
        position:absolute;
        right:4rem;

    `;
    const JoinDiv = styled.div`
        width: 10rem;
        height: 3.375rem;
        background: linear-gradient(158deg, #0097FF 0%, #B930C0 100%);
        border-radius: 2.25rem;
        padding:0.75rem 2.75rem;
    `;
    const JoinSpan = styled.div`
        height: 2rem;
        font-size: 1.375rem;
        line-height: 2rem;
        text-align:center;
        font-family: NotoSansSC-Bold, NotoSansSC;
        font-weight: bold;
        color: #FFFFFF;
    `;
    const BgBox = styled.div`
    width: 0px;
    height: 0px;
    border-color: red transparent transparent red;
    border-width: 50px 50px 50px 50px;
    border-style: solid;
`;

    return (
        <>
            <div className="flex flex-row justify-between ml-12" >
                <div className="flex flex-col ">
                    <SherpaXTitle className="pt-28 w-148">SherpaX Crowdloan is ongoing</SherpaXTitle>
                    <ContentDiv className="py-12">
                        SherpaX, an independent research and development network where theoretical experiments and applicable practices integrate with each other priming them for mainstream application on ChainX.
                    </ContentDiv>
                </div>
                <BgDiv>
                    <img src={bg_circle} alt="" style={{ width: '100%', height: 'auto' }} />
                </BgDiv>
                <Bgcontent className="">
                    <img src={circle} alt="" style={{ width: '100%', height: 'auto' }} />
                </Bgcontent>
            </div>
            <JoinDiv className="mt-29 ml-12" style={{visibility:'hidden'}}>
            </JoinDiv>
        </>
    );
}

export default FirstPage;
