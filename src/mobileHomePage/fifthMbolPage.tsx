import React from "react";
import styled from "styled-components";
import { ContentWrap } from "./styles";
import nft from "./assets/nft.svg";

const BackBG = styled.div`
  position: relative;
  background: #000000;
  width: 100vw;
  transform: skew(0deg, -10deg);
  .title,
  .content {
    color: #ffffff;
  }
`;

const BottomTriangle = styled.div`
  position: absolute;
  height: 30vw;
  width: 100vw;
  background: #000000;
  bottom: -10vw;
  z-index: -1;
`;
function FifthPage(): React.ReactElement
{
  return (
    <ContentWrap>
      <BackBG>
        <div className="container">
          <div className="title">Decentralized NFT Auction Platform</div>
          <div className="content">
            ComingChat is a metaverse platform that integrates private social networking, a crypto wallet, decentralized digital identity, DApps and NFT creation and auction. ComingChat has so far issued more than 1,800,000 NFT. SherpaX launches the CID NFT Marketplace "Comfuture".

          </div>
          <img src={nft} alt="" className="nft" />
        </div>
      </BackBG>
      <BottomTriangle />
    </ContentWrap>
  );
}

export default FifthPage;
