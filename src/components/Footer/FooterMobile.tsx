import React from "react";
import logo from "../../assets/SherpaX logo_black.svg"
import email from "../../assets/email.svg"
import github from "../../assets/github.svg"
import medium from "../../assets/medium.svg"
import telegram from "../../assets/telegram.svg"
import twitter from "../../assets/twitter.svg"
import wechat from "../../assets/wechat.svg"
import styled from 'styled-components';
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
    const list = [email, github, medium, telegram, twitter, wechat]
    return (
        <div className="flex flex-col justify-center bg-topBar-white">
            <ImgContent>
                {list?.map((item, index) =>
                {
                    return (<img src={item} alt="" style={{ marginRight: `${index === list.length - 1 ? '' : '7.8vw'}`, width: '8vw' }} />)
                })}
            </ImgContent>
            {/* <Version>
                @2019-2021 ChainX. All rights reserved.
            </Version> */}
            <img src={logo} alt="" style={{ width: '56px', height: '29px' }} />
        </div>
    );
}

export default Footer;
