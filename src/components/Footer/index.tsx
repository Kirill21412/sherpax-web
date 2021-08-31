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

    const ImgContent = styled.div`
        display:flex;
        flex-direction:row;
    `;
    const list = [email, github, medium, telegram, twitter, wechat]
    return (
        <div className="flex flex-row justify-between bg-topBar-white px-15 mt-29 py-5">
            <ImgContent>
                {list?.map((item, i) =>
                {
                    return (<img src={item} alt="" key={i} style={{ marginRight: "24px", width: '24px' }} />)
                })}
            </ImgContent>
            <img src={logo} alt="" style={{ width: "126px", height: '29px' }} />
        </div>
    );
}

export default Footer;
