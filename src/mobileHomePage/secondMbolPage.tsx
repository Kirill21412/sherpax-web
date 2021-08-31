import React from "react";
import styled from "styled-components";
import title from "./assets/sherpax.svg";
import { ContentWrap } from "./styles";
import world from "./assets/world.png";

const BackBG = styled.div`
  background: #ffffff;
  width: 100vw;
  transform: skew(0deg, -10deg);
  .content {
    color: #333333;
  }
`;
function SecondPage(): React.ReactElement
{
  return (
    <ContentWrap>
      <BackBG>
        <div className="container">
          <div className="title">
            <img src={title} alt="title" />
          </div>
          <div className="content">
            SherpaX, the canary network of ChainX, functions as a 'sherpa'. Sherpas are members of an ethnic group in the Himalayas who are famous for their mountaineering and navigation skills that guide climbers through unknown dangers and threatening situations. SherpaX will have the same responsibility and will test new innovative ideas and technological experiments first before they are elevated to ChainX.
          </div>
          <img src={world} alt="" className="world" />
        </div>
      </BackBG>
    </ContentWrap>
  );
}

export default SecondPage;
