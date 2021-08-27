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
function SecondPage(): React.ReactElement {
  return (
    <ContentWrap>
      <BackBG>
        <div className="container">
          <div className="title">
            <img src={title} alt="title" />
          </div>
          <div className="content">
            SherpaX, functions as a guide to ChainX as Sherpas, members of an
            ethnic group in the Himalayas who are famous for their
            mountaineering skills, navigate through unknow dangers and
            complicated situations to guide climbers safely to the peak.
            Therefore, new innovative ideas and technological experiments will
            be first carried out on SherpaX as it bears remarkable resemblance
            to ChainX in terms of design.
          </div>
          <img src={world} alt="" className="world" />
        </div>
      </BackBG>
    </ContentWrap>
  );
}

export default SecondPage;
