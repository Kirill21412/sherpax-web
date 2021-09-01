import React from "react";
import { Props, slide as Menu } from "react-burger-menu";
import logo from "../../assets/SherpaX logo_white.svg"
import more from "../../assets/icon_more.svg"
import close from "../../assets/icon_close.svg"
import icon_chainx from "../../assets/icon_chainx.svg"
import icon_crowdloan from "../../assets/icon_crowdloan.svg"
import icon_lighterpaper from "../../assets/icon_lighterpaper.svg"
import styled from "styled-components";

export default (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Menu> & Readonly<Props> & Readonly<{ children?: React.ReactNode; }>) =>
{
  const LogoDiv = styled.div`
    margin-top: 2.25vh;
    margin-bottom: 2.25vh;
    margin-left: 5.3vw;
    width: 24.5vw;
    height:3.5vh;
  `;

  const MenuItem = styled.div`
    width: 66.7VW;
    height: 11.33VH;
    margin:0 auto;
    :hover{
      background: #ECF8FF;
    }
  `;

  const ItemName = styled.div`
    height: 3vh;
    font-size: 16px;
    font-family: Helvetica;
    color: #212121;
    line-height: 5vh;
  `;

  return (
    <Menu right  {...props} customBurgerIcon={< img src={more} />} customCrossIcon={< img src={close} />}>
      <LogoDiv >
        <img src={logo} alt="" />
      </LogoDiv>
      <MenuItem>
        <div className="flex flex-row py-5">
          <img src={icon_chainx} alt="" style={{ width: '7.2vw', height: '4.5vh', marginLeft: '5.3vw', marginRight: '5.3vw' }} />
          <ItemName> <a href="https://www.chainx.org/en/" target="_black">ChainX</a> </ItemName>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="flex flex-row py-5">
          <img src={icon_crowdloan} alt="" style={{ width: '7.2vw', height: '4.5vh', marginLeft: '5.3vw', marginRight: '5.3vw' }} />
          <ItemName><a href="https://ksmslot.chainx.cc/" target="_black">Crowdloan</a></ItemName>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="flex flex-row py-5">
          <img src={icon_lighterpaper} alt="" style={{ width: '7.2vw', height: '4.5vh', marginLeft: '5.3vw', marginRight: '5.3vw' }} />
          <ItemName><a href="https://www.chainx.org/static/SherpaXLightpaper-a911d010de14ad3438b832143c2b9932.pdf" target="_black">LighterPaper</a></ItemName>
        </div>
      </MenuItem>
    </Menu>
  );
};
