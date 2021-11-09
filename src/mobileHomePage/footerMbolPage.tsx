import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import title from "./assets/sherpax.png";
import { ContentWrap } from "./styles";
import logo from "./assets/SherpaX logo_black.png";
import { iconList } from "./assets/list";
import email from "./assets/footer_email.png"
import github from "./assets/footer_github.png"
import medium from "./assets/footer_medium.png"
import telegram from "./assets/footer_telegram.png"
import twitter from "./assets/footer_twitter.png"
import wechat from "./assets/footer_wechat.png"
import wechatImg from "../assets/wechatImg.png"
import { copy } from "../helps/copy";

const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  width: 100vw;
  height: 30vw;
  display: flex;
  flex-direction: column;
  padding: 6.4vw 6.267vw;
  .copyright {
    font-size: 2.667vw;
    position: relative;
    top: 2vw;
  }
  .logo {
    width: 23.867vw;
    height: 5.333vw;
  }
`;
const IconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  img {
    width: 8vw;
    height: 8vw;
  }
`;
const WeChatScan = styled.div`
  position:absolute;
  z-index:1;
  width:20vw;
  height:20vw;
  bottom: 8vh;
  left: 28.5vw;
  &>img{
    width:20vw;
    height:20vw;
  }
`;

function FooterMbolPage(): React.ReactElement
{
  const [showWeChat, setShowWeChat] = useState(false)
  const fn = useCallback((e) =>
  {
    {
      const dom: any = e.target
      if (dom.className !== 'wechat') {
        setShowWeChat(false)
      }
      // console.log(dom.className, e)
    }
  }, [])
  useEffect(() =>
  {
    window.addEventListener('click', fn)
    // return window.removeEventListener('click', fn)
  }, [])

  return (
    <FooterWrap>
      <IconWrap>
        <div id='span' onClick={() => copy('hi@chainx.org')} >
          <img src={email} alt="" />
        </div>
        <a href="https://github.com/chainx-org/sherpax-web" target="_black">
          <img src={github} alt="" />
        </a>
        <a href="https://chainx-org.medium.com/" target="_black">
          <img src={medium} alt="" />
        </a>
        <a href="https://t.me/chainx_org" target="_black">
          <img src={telegram} alt="" />

        </a>
        <a href="https://twitter.com/chainx_org" target="_black">
          <img src={twitter} alt="" />
        </a>
        <img src={wechat} className={'wechat'} onClick={() => setShowWeChat(true)} />
      </IconWrap>
      <div style={{ 'position': 'relative', }}>
        {showWeChat ?
          <WeChatScan><img className={'wechat'} src={wechatImg}></img></WeChatScan> : ""}
      </div>
      <img src={logo} alt="" className="logo" />
    </FooterWrap>
  );
}

export default FooterMbolPage;
