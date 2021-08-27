import React from "react";
import styled from "styled-components";
import title from "./assets/sherpax.svg";
import { ContentWrap } from "./styles";
import logo from "./assets/SherpaX logo_black.png";
import { iconList } from "./assets/list";

const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  width: 100vw;
  height: 40vw;
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

function FooterMbolPage(): React.ReactElement {
  return (
    <FooterWrap>
      <IconWrap>
        {iconList.map((item) => {
          return (
            <a href={item.address}>
              <img src={item.icon} alt="" />
            </a>
          );
        })}
      </IconWrap>
      <div className="copyright">© 2019-2021 ChainX. All rights reserved.</div>
      <img src={logo} alt="" className="logo" />
    </FooterWrap>
  );
}

export default FooterMbolPage;
