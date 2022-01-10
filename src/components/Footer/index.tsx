import React from "react";
import logo from "../../assets/SherpaX logo_black.svg"
import email from "../../assets/email.svg"
import github from "../../assets/github.svg"
import medium from "../../assets/medium.svg"
import telegram from "../../assets/telegram.svg"
import twitter from "../../assets/twitter.svg"
import wechat from "../../assets/wechat.svg"
import wechatImg from "../../assets/wechatImg.png"
import styled from 'styled-components';
import { copy } from "../../helps/copy";

function Footer(): React.ReactElement
{

    const ImgContent = styled.div`
        display:flex;
        flex-direction:row;
        .wechatimg{
            cursor: pointer;
        }
        
        #wechatHover img{
        display:none;
        }

        #idd {
            position: absolute;
            left: 17rem; //位置和大小自己定义
            top: 2rem; 
            width: 100px;
            height:9rem;
            cursor: pointer;//cursor即鼠标悬浮时鼠标样式,pointer为小手
           }
        #idd img{
           display:none;
        }
        #idd:hover img{
           display:block;
           }
    `;





    return (
        <div className="flex flex-row justify-between bg-topBar-white px-15 mt-29 py-5">
            <ImgContent>
                <div id='span' onClick={() => copy('sherpaxcrowdloan@gmail.com')} >
                    <img src={email} alt="" style={{ marginRight: "24px", width: '24px' }} />
                </div>
                <a href="https://github.com/chainx-org/sherpax-web" target="_black">
                    <img src={github} alt="" style={{ marginRight: "24px", width: '24px' }} />
                </a>
                <a href="https://medium.com/@sherpax/" target="_black">
                    <img src={medium} alt="" style={{ marginRight: "24px", width: '24px' }} />
                </a>
                <a href="https://t.me/+PC1SS7aE7a45ZWE1" target="_black">
                    <img src={telegram} alt="" style={{ marginRight: "24px", width: '24px' }} />
                </a>
                <a href="https://twitter.com/SherpaX_DAO" target="_black">
                    <img src={twitter} alt="" style={{ marginRight: "24px", width: '24px' }} />
                </a>
                {/*<div className="wechatimg">*/}
                {/*    <img src={wechat} alt="" />*/}
                {/*</div>*/}
                {/*<div id="wechatHover">*/}
                {/*    <img src={wechatImg} alt="" />*/}
                {/*</div>*/}
                {/*<div id="idd">*/}
                {/*    <img src={wechatImg} />*/}
                {/*</div>*/}

            </ImgContent>
            <img src={logo} alt="" style={{ width: "126px", height: '29px' }} />
        </div>
    );
}

export default Footer;

