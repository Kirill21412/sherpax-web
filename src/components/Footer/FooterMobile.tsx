import React, { useState } from "react";
import logo from "../../assets/SherpaX logo_black.svg"
import email from "../../assets/email.svg"
import github from "../../assets/github.svg"
import medium from "../../assets/medium.svg"
import telegram from "../../assets/telegram.svg"
import twitter from "../../assets/twitter.svg"
import wechat from "../../assets/wechat.svg"
import styled from 'styled-components';
import wechatImg from "../../assets/wechatImg.png"
import { copy } from "../../helps/copy";
function Footer(): React.ReactElement
{

    const Version = styled.div`
        padding: 10px 0px;
        height: 20px;
        font-size: 14px;
        font-family: NotoSansSC-Regular, NotoSansSC;
        font-weight: 400;
        color: #000000;
        line-height: 20px;
    `;

    const ImgContent = styled.div`
        display:flex;
        flex-direction:flex-row;
        padding:0 6.266vw;
    `;
    function dropDown(url: string)
    {
        debugger
        window.location.href = url;
    }
    const [showWeChat, setShowWeChat] = useState(false)
    return (
        <div className="flex flex-col justify-center bg-topBar-white">
            <ImgContent>
                <div id='span' onClick={() => copy('hi@chainx.org')} >
                    <img src={email} alt="" style={{ width: '8vw' }} />
                </div>
                <div onClick={() => dropDown('https://github.com/chainx-org/sherpax-web')}>
                    <img src={github} alt="" style={{ width: '8vw' }} />
                </div>
                <div onClick={() => dropDown('https://chainx-org.medium.com/')}>
                    <img src={medium} alt="" style={{ width: '8vw' }} />
                </div>
                <div onClick={() => dropDown('https://t.me/chainx_org')}>
                    <img src={telegram} alt="" style={{ width: '8vw' }} />

                </div>
                <div onClick={() => dropDown('https://twitter.com/chainx_org')}>
                    <img src={twitter} alt="" style={{ width: '8vw' }} />
                </div>
                <img src={wechat} style={{ marginRight: '7.8vw', width: '8vw' }} />
                {showWeChat ? <img src={wechatImg}></img> : ""}

            </ImgContent>
            <img src={logo} alt="" style={{ width: '56px', height: '29px' }} />
        </div>
    );
}

export default Footer;
