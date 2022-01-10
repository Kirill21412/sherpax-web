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

  const linkList = [{name:'ChainX',url:'https://www.chainx.org/en/'},{name:'Wallet',url:'https://wallet.sherpax.io/'},{name:'Scan',url:'https://sherpaxscan.chainx.org/'},{name:'Lightpaper',url:'https://singapore-chainx.oss-ap-southeast-1.aliyuncs.com/chainx.org/Chainx.pdf?versionId=CAEQDxiBgICllPel6xciIDUyMWMzNzk0ZjgzNzRjY2ZiNzRlYzNkYTEyZGUwNzNk'}]


  return (
    <Menu right  {...props} customBurgerIcon={< img src={more} />} customCrossIcon={< img src={close} />}>
      <LogoDiv >
        <img src={logo} alt="" />
      </LogoDiv>
      {linkList.map((item)=>{
        return(<MenuItem>
          <div className="flex flex-row py-5">
            <img src={icon_chainx} alt="" style={{ width: '7.2vw', height: '4.5vh', marginLeft: '5.3vw', marginRight: '5.3vw' }} />
            <ItemName> <a href={item.url} target="_black">{item.name}</a> </ItemName>
          </div>
        </MenuItem>)
      })}
    </Menu>
  );
};
