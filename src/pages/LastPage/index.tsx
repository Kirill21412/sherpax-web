import React, { useState } from "react";
import img from "../../assets/img5.svg";
import styled from 'styled-components';
import Item from "./Item";
import ItemS from "./ItemS";



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
        font-size:16px;
        font-family:Helvetica-Light, Helvetica;
        font-weight:300;
        color:#ffffff;
        line-height:24px;
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

    const [choseItem, setChoseItem] = useState(false);

    const resizeFn = () =>
    {
        watchChangeSize();
    }
    window.addEventListener('resize', resizeFn)


    function watchChangeSize()
    {
        var offsetWid = document.documentElement.clientWidth;
        if (offsetWid <= 1000) {
            setChoseItem(true)
        } else {
            setChoseItem(false)
        }
    }

    return (
        <>
            <div className="flex flex-row justify-between pt-30">
                <div className="flex flex-col justify-start" style={{ margin: 'auto 0', marginLeft: '8rem' }}>
                    <TitleContent>Decentralized NFT Auction Platform</TitleContent>
                    <ContentSherpaX>
                        ComingChat is a metaverse platform that integrates private social networking, a crypto wallet, decentralized digital identity, DApps and NFT creation and auction. ComingChat has so far issued more than 1,200,000 NFT. SherpaX launches the CID NFT Marketplace "Comfuture".

                    </ContentSherpaX></div>
                <div >
                    <img src={img} alt="" />
                </div>

            </div>
            <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center mt-10" style={{ margin: '10rem auto 6rem auto' }}>
                    <Ksx>KSX TOKEN</Ksx>
                    <div style={{ width: '100px', height: '1px', background: '#FFFFFF', margin: '1rem auto' }}></div>
                </div>
                {choseItem ? <ItemS /> : <Item />}
            </div>
        </>
    );
}

export default LastPage;
