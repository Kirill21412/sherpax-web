import React from "react";
import styled from "styled-components";
import fee from "./assets/icon_fee.png";
import treasury from "./assets/icon_treasury.png";
import governance from "./assets/icon_governance.png";
import smart from "./assets/icon_smart.png";

const KSXWrap = styled.div`
  background: #000000;
  width: 100vw;
  padding: 0vw 10vw;
  .title {
    color: #ffffff;
    font-size: 7.2vw;
    font-weight: bold;
  }
  .line {
    width: 13.333vw;
    height: 0.133vw;
    margin: 4.267vw 0 7.733vw;
    background: #ffffff;
  }
  .listwrap {
    display: flex;
    flex-wrap: wrap;
  }
  .image:nth-child(1) {
    border: 1px solid red;
    // &:nth-child(1) {
    //   width: 12.4vw;
    //   height: 23.333vw;
    // }
  }
`;
const Cell = styled.li`
  position: relative;
  margin: 0 -0.266vw -0.266vw 0;
  border: 0.133vw solid #838383;
  padding: 5.6vw 4.267vw 4vw;
  width: 40vw;
  height: 67vw;
  h1 {
    font-size: 4.8vw;
    line-height: 6.667vwpx;
    font-weight: 600;
    color: #ffffff;
  }
  .content {
    font-size: 3.733vw;
    line-height: 4.8vw;
    font-weight: 300;
    color: #ffffff;
  }
  img {
    position: absolute;
    left: 4.267vw;
    bottom: 4vw;
  }
`;

const cellList = [
  {
    title: "Fee",
    content: "As a transaction gas fee on the SherpaX network.",
    picture: fee,
  },
  {
    title: "Treasury",
    content: "Get your projects funded from the treasury.",
    picture: treasury,
  },
  {
    title: "Governance",
    content:
      "Empowers the community to vote, elect council members, guide the development through on-chain governance.",
    picture: governance,
  },
  {
    title: "Deployment",
    content:
      "Enables developers to deploy new DApps and smart contracts on SherpaX ",
    picture: smart,
  },
];

interface cellListItem {
  title: string;
  content: string;
  picture: string;
}
function SixthPage(): React.ReactElement {
  return (
    <KSXWrap>
      <div className="title">KSX TOKEN</div>
      <div className="line" />
      <ul className="listwrap">
        {cellList.map((item: cellListItem) => {
          return (
            <Cell>
              <h1>{item.title}</h1>
              <div className="content">{item.content}</div>
              <img src={item.picture} alt="" className="image"/>
            </Cell>
          );
        })}
      </ul>
    </KSXWrap>
  );
}

export default SixthPage;
