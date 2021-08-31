import React from "react";
import styled from "styled-components";
import { ContentWrap } from "./styles";
import share from "./assets/share.png";

const BackBG = styled.div`
  background: #ffffff;
  width: 100vw;
  transform: skew(0deg, -10deg);
  .title,
  .content {
    color: #333333;
  }
`;
function FourthPage(): React.ReactElement
{
  return (
    <ContentWrap>
      <BackBG>
        <div className="container">
          <div className="title">More Open Blockchain Network</div>
          <div className="content">
            With a more open blockchain network, SherpaX developers will be able to use both SherpaX Crowdloan has been starting development environments. Developers familiar with EVM's development tools will be able to easily deploy their applications on top of the SherpaX network and share security with the Kusama network.
          </div>
          <img src={share} alt="" className="share" />
        </div>
      </BackBG>
    </ContentWrap>
  );
}

export default FourthPage;
