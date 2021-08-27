import React from "react";
import bg_circle from "../../assets/bg_1.svg"
import circle from "../../assets/img1.svg"
import img_2 from "../../assets/img2.svg"
import img_3 from "../../assets/img3.svg"
import img_4 from "../../assets/img4.svg"
import imgSherpax from "../../assets/sherpax.svg"
import img_5 from "../../assets/img5.svg"
import fee from "../../assets/icon_fee.svg"
import treasury from "../../assets/icon_treasury.svg"
import governance from "../../assets/img_governance.svg"
import smart from "../../assets/icon_smart.svg"
import KsxItem from "../../components/KsxItem/mobile";
import styled from 'styled-components';



function FirstPage(): React.ReactElement
{
    const SherpaXTitle = styled.div`
        width: 90vw;
        height: 15vh;
        font-size: 9.06vw;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 7vh;
        background: linear-gradient(148deg, #BE15B8 0%, #33C8F5 54%, #FFFFFF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align:center;
        margin:1vh auto;
    `;

    const ContentDiv = styled.div`
        width: 89.86vw;
        height: 10.5vh;
        font-size: 3.73vw;
        font-family: Helvetica-Light, Helvetica;
        font-weight: 400;
        color: #FFFFFF;
        text-align:center;
    `;

    const BgDiv = styled.div`
        width:66.4vw;
        height:44vh;
        z-index: -1;
        position: absolute;
        top: 10rem;
        right: 60px;
    }
    `;

    const Bgcontent = styled.div`
        width: 62.4vw;
        height: 38vh;
        top: 25.125vh;
        z-index: -1;
        position: absolute;
        right: 5rem;
    `;
    const JoinDiv = styled.div`
        width: 37.33vw;
        height: 6.7vh;
        background: linear-gradient(158deg, #0097FF 0%, #B930C0 100%);
        border-radius: 40px;
        margin: 0 auto;
        margin-top: 38vh;
    `;
    const JoinSpan = styled.div`
        width: 9.6vw;
        height: 3.7vh;
        font-size: 4vw;
        font-family: NotoSansSC-Bold,NotoSansSC;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 3.7vh;
        text-align: center;
        margin: 10px auto;
    `;

    const SecondSpan = styled.div`
    width: 100vw;
    // height: 100vw;
    font-size: 16px;
    font-family: Helvetica-Light, Helvetica;
    font-weight: 300;
    color: #333333;
    line-height: 24px;
    margin-top:42px;
`;

    const TitleContent = styled.div`
width: 100vw;
height: 76px;
font-size: 32px;
font-family: Helvetica-Bold, Helvetica;
font-weight: bold;
color: #FFFFFF;
line-height: 38px;
`;
    const ContentSherpaX = styled.div`
width: 100vw;
height: 96px;
font-size: 16px;
font-family: Helvetica-Light, Helvetica;
font-weight: 300;
color: #FFFFFF;
line-height: 24px;
margin-top:42px;
`;

    const Ksx = styled.div`
width: 50vw;
height: 38px;
font-size: 32px;
font-family: Helvetica-Bold, Helvetica;
font-weight: bold;
color: #FFFFFF;
line-height: 38px;
`;
    return (
        <div className="flex flex-col justify-center">
            <>
                <div className="flex flex-col justify-center mx-auto my-0">
                    <SherpaXTitle>SherpaX Crowdloan Has Started</SherpaXTitle>
                    <ContentDiv>SherpaX, an independent research and development network where theoretical experiments and applicable practices integrate with each other</ContentDiv>
                </div>
                <div style={{ position: "relative", marginTop: '-20vh' }}>
                    <BgDiv>
                        <img src={bg_circle} alt="" style={{ width: '100%', height: 'auto' }} />
                    </BgDiv>
                    <Bgcontent className="">
                        <img src={circle} alt="" style={{ width: '100%', height: 'auto' }} />
                    </Bgcontent>
                </div>
                <JoinDiv>
                    <JoinSpan>Join</JoinSpan>
                </JoinDiv>
            </>
            {/* <>
                <div>
                    <img src={img_2} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                    <img src={imgSherpax} alt="" />
                    <SecondSpan>SherpaX, functions as a guide to ChainX as Sherpas, members of an ethnic group in the Himalayas who are famous for their mountaineering skills, navigate through unknow dangers and complicated situations to guide climbers safely to the peak. Therefore, new innovative ideas and technological experiments will be first carried out on SherpaX as it bears remarkable resemblance to ChainX in terms of design.</SecondSpan>
                </div>
            </>
            <>
                <TitleContent>Bitcoin Threshold Signature Tool</TitleContent>
                <ContentSherpaX>Aggregation Signature technology based on Schnorr Signature, which will be used in the new cross-chain scheme of XBTC. We will develop a lightweight and fast bitcoin threshold signature tool for the ComingChat app.</ContentSherpaX>
                <div>
                    <img src={img_3} alt="" />
                </div>
            </>
            <>
                <div className="h-97.25">
                    <img src={img_4} alt="" />
                </div>
                <div className="flex flex-col justify-center mt-22-">
                    <TitleContent>More Open Blockchain Network</TitleContent>
                    <ContentSherpaX>
                        With a more open blockchain network, SherpaX developers will be able to use both Substrate - and EVM-compatible development environments. Developers familiar with EVM's development tools will be able to easily deploy their applications on top of the SherpaX network and share security with the Kusama network.
                    </ContentSherpaX>
                </div>
            </>
            <>
                <div className="flex flex-col justify-center">
                    <TitleContent>Decentralized NFT Auction Platform</TitleContent>
                    <ContentSherpaX>
                        ComingChat, a decentralized NFT auction platform based on smart contracts, has so far issued more than 120,000 NFT.
                    </ContentSherpaX></div>
                <div>
                    <img src={img_5} alt="" />
                </div>
                <div className="flex flex-col justify-center mt-10" style={{ margin: '10rem auto 6rem auto' }}>
                    <Ksx>KSX TOKEN</Ksx>
                    <div style={{ width: '100px', height: '1px', background: '#FFFFFF', margin: '1rem auto' }}></div>
                </div>
                <div className="flex flex-row flex-wrap" style={{ padding: '0 10vw' }}>
                    <KsxItem ksxName="Fee" ksxContent="As a transaction gas fee on the SherpaX network" ksximage={fee}  ></KsxItem>
                    <KsxItem ksxName="Treasury" ksxContent="Get your projects funded from the treasury." ksximage={treasury} ></KsxItem>
                    <KsxItem ksxName="Governance" ksxContent="Empowers the community to vote, elect council members, guide the development through on-chain governance." ksximage={governance} ></KsxItem>
                    <KsxItem ksxName="Deployment" ksxContent="Enables developers to deploy new DApps and smart contracts on SherpaX " ksximage={smart} ></KsxItem>
                </div>
            </> */}
        </div >
    );
}

export default FirstPage;
