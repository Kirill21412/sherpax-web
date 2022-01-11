import React from "react";
import { Props, slide as Menu } from "react-burger-menu";
import logo from "../../assets/SherpaX logo_white.svg"
import more from "../../assets/icon_more.svg"
import close from "../../assets/icon_close.svg"
import chainxIcon from '../../assets/icon_chainx.svg'
import walletIcon from '../../assets/icon_wallet.svg'
import scanIcon from '../../assets/icon_scan.svg'
import lightPaper from '../../assets/icon_lighterpaper.svg'

import styled from "styled-components";
const LogoDiv = styled.div`
    margin-top: 2.25vh;
    margin-bottom: 2.25vh;
    margin-left: 5.3vw;
    width: 24.5vw;
    height:3.5vh;
  `;

const MenuItem = styled.div`
    width: 66.7VW;
    //height: 11.33VH;
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
export default (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Menu> & Readonly<Props> & Readonly<{ children?: React.ReactNode; }>) =>
{
  const linkList = [
      {name:'ChainX',icon:chainxIcon,url:'https://www.chainx.org/en/'},
    {name:'Wallet',icon:walletIcon,url:'https://wallet.sherpax.io/'},
    {name:'Scan',icon:scanIcon,url:'https://scan.sherpax.io/'},
    {name:'LightPaper',icon:lightPaper,url:'https://singapore-chainx.oss-ap-southeast-1.aliyuncs.com/chainx.org/Chainx.pdf?versionId=CAEQDxiBgICllPel6xciIDUyMWMzNzk0ZjgzNzRjY2ZiNzRlYzNkYTEyZGUwNzNk'}]

  return (
    <Menu right  {...props} customBurgerIcon={< img src={more} />} customCrossIcon={< img src={close} />}>
      <LogoDiv >
        <img src={logo} alt="" />
      </LogoDiv>
      {linkList.map((item)=>{
        return(<MenuItem>
            <a href={item.url} target="_black" className="flex flex-row py-5">
          {/*<div >*/}
            <img src={item.icon} alt="" style={{ width: '7.2vw', height: '4.5vh', marginLeft: '5.3vw', marginRight: '5.3vw' }} />
            <ItemName>{item.name}</ItemName>
          </a>
        </MenuItem>)
      })}
    </Menu>
  );
};
