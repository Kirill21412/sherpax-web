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
    `;
    const list = [email, github, medium, telegram, twitter, wechat]
    return (
        <div className="flex flex-row justify-between bg-topBar-white px-15 h-12 mt-29 py-1">
            <Version>
                @2019-2021 ChainX. All rights reserved.
            </Version>

            <ImgContent>
                {list?.map((item) =>
                {
                    return (<img src={item} alt="" style={{ marginRight: "24px", width: '24px' }} />)
                })}
                <img src={logo} alt="" style={{ width: '126px', height: '29px' }} />
            </ImgContent>
        </div>
    );
}

export default Footer;
