import React from "react";
import img from "../../assets/img5.svg"
import imgSherpax from "../../assets/sherpax.svg"
import fee from "../../assets/icon_fee.svg"
import treasury from "../../assets/icon_treasury.svg"
import governance from "../../assets/img_governance.svg"
import smart from "../../assets/icon_smart.svg"
import styled from 'styled-components';
import KsxItem from "../../components/KsxItem";



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
    const Ksx = styled.div`
        width: 187px;
        height: 38px;
        font-size: 32px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 38px;
    `;

    return (
        <div className="flex flex-row justify-between px-15 pt-30 flex-wrap">
            <div className="flex flex-col justify-center px-15">
                <TitleContent>Decentralized NFT Auction Platform</TitleContent>
                <ContentSherpaX>
                    ComingChat, a decentralized NFT auction platform based on smart contracts, has so far issued more than 120,000 NFT.
                </ContentSherpaX></div>
            <div className="w-153 h-103.25">
                <img src={img} alt="" />
            </div>
            <div className="flex flex-col justify-center mt-10" style={{ margin: '10rem auto 6rem auto' }}>
                <Ksx>KSX TOKEN</Ksx>
                <div style={{ width: '100px', height: '1px', background: '#FFFFFF', margin: '1rem auto' }}></div>
            </div>
            <div className="flex flex-row justify-between px-15 flex-wrap">
                <KsxItem ksxName="Fee" ksxContent="As a transaction gas fee on the SherpaX network" ksximage={fee}  ></KsxItem>
                <KsxItem ksxName="Treasury" ksxContent="Get your projects funded from the treasury." ksximage={treasury} ></KsxItem>
                <KsxItem ksxName="Governance" ksxContent="Empowers the community to vote, elect council members, guide the development through on-chain governance." ksximage={governance} ></KsxItem>
                <KsxItem ksxName="Deployment" ksxContent="Enables developers to deploy new DApps and smart contracts on SherpaX " ksximage={smart} ></KsxItem>
            </div>
        </div>
    );
}

export default LastPage;
