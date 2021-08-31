import React from "react";
import styled from "styled-components";
import { ContentWrap } from "./styles";
import triangle from "./assets/triangle.png";

const BackBG = styled.div`
  background: #000000;
  width: 100vw;
  transform: skew(0deg, -10deg);
  .title,
  .content {
    color: #ffffff;
  }
  .content {
    font-weight: 200 !important;
  }
`;
function ThirdPage(): React.ReactElement
{
  return (
    <ContentWrap>
      <BackBG>
        <div className="container">
          <div className="title">Bitcoin Threshold Signature Tool</div>
          <div className="content">
            Aggregation Signature technology based on Schnorr Signature, which will be used in the new cross-chain scheme of XBTC. We will develop a lightweight and fast bitcoin threshold signature tool for the ComingChat app, enabling lightning fast XBTC transfers and DeFi applications.
          </div>
          <img src={triangle} alt="" className="triangle" />
        </div>
      </BackBG>
    </ContentWrap>
  );
}

export default ThirdPage;
