import React from "react";
import styled from "styled-components";
import bannerImg from "./assets/banner.png";
import bannerbg from "./assets/bannerbg.png";

const TopTriangle = styled.div`
  position: absolute;
  height: 30vw;
  width: 100vw;
  background: #000000;
  top: 0;
`;

const BackBG = styled.div`
  background: #000000;
  height: auto;
  width: 100vw;
  padding: 3vw 0 0vw;
  transform: skew(0deg, -10deg);
  position: relative;
  * {
    text-align: center;
  }
`;

const Content = styled.div`
  transform: skew(0deg, 10deg);
  div.text {
    height: 0vw;
    padding: 0 5vw;
  }
  .title {
    width: 100%;
    margin: 3vw auto 1vw;
    font-size: 9.667vw;
    word-break: break-word;
    font-weight: bold;
    color: #ffffff;
    line-height: 11.2vw;
    background: linear-gradient(148deg, #be15b8 0%, #33c8f5 54%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .introduce {
    color: #ffffff;
    font-weight: 200;
    font-size: 3.733vw;
    line-height: 5.6vw;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div.imgwrap {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 8vw;
    img.bannerImg {
      position: absolute;
      width: 62.4vw;
      height: 60.267vw;
    }
    img.bannerbg {
      position: relative;
      width: 100vw;
      height: auto;
    }
    button.join {
      position: absolute;
      bottom: 0;
      width: 37.333vw;
      height: 10.667vw;
      background: linear-gradient(158deg, #0097ff 0%, #b930c0 100%);
      border-radius: 5.333vw;
      bottom: 20vw;
      color: #ffffff;
    }
  }
`;
function FirstPage(): React.ReactElement
{
  return (
    <>
      <TopTriangle></TopTriangle>
      <BackBG>
        <Content>
          <div className="text">
            <div className="title">SherpaX Crowdloan Has Started</div>
            <div className="introduce">
              SherpaX, an independent research and development network where
              theoretical experiments and applicable practices integrate with
              each other
            </div>
          </div>
          <div className="imgwrap">
            <img src={bannerImg} alt="bannerImg" className="bannerImg" />
            <img src={bannerbg} alt="bannerbg" className="bannerbg" />
            <button className="join"><a href="https://ksmslot.chainx.cc/" target="_black">Join</a></button>
          </div>
        </Content>
      </BackBG>
    </>
  );
}

export default FirstPage;
