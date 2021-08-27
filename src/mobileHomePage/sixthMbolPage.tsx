import React from "react";
import styled from "styled-components";
import { cellList } from "./assets/list";
const KSXWrap = styled.div`
  background: #000000;
  width: 100vw;
  padding: 0vw 10vw 20vw;
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
  li {
    &:nth-child(1) {
      height: 67vw;
      .image {
        width: 12.4vw;
        height: 23.333vw;
      }
    }
    &:nth-child(2) {
      .image {
        width: 22.933vw;
        height: 19.467vw;
      }
    }
    &:nth-child(3) {
      height: 76.533vw;
      .image {
        width: 19.6vw;
        height: 19.733vw;
      }
    }
    &:nth-child(4) {
      .image {
        width: 19.867vw;
        height: 16vw;
      }
    }
  }
`;
const Cell = styled.li`
  position: relative;
  margin: 0 -0.266vw -0.266vw 0;
  border: 0.133vw solid #838383;
  padding: 5.6vw 4.267vw 4vw;
  width: 40vw;

  h1 {
    font-size: 4.8vw;
    line-height: 6.667vwpx;
    font-weight: 600;
    color: #ffffff;
  }
  .content {
    font-size: 3.733vw;
    line-height: 4.8vw;
    font-weight: 200;
    color: #ffffff;
    margin: 3.733vw 0;
  }
  img {
    position: absolute;
    left: 4.267vw;
    bottom: 4vw;
  }
`;

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
              <img src={item.picture} alt="" className="image" />
            </Cell>
          );
        })}
      </ul>
    </KSXWrap>
  );
}

export default SixthPage;
