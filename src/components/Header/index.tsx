import React from "react";
import logo from "../../assets/SherpaX_logo_white.svg"
import styled from 'styled-components';
function Home(): React.ReactElement
// 顶部icon,和跳转三个按钮，外层设置padding 内层用flex布局，space-between。
//移动端适配，采用postcss-
{

    const LinkAddress = styled.div`
        color: #FFFFFF;
        height: 1rem;
        line-height: 1rem;
        font-size: 1rem;
        font-family: NotoSansSC-Regular, NotoSansSC;
        font-weight: 400;
        margin:1rem 1rem;
    `;
    return (
        <div className="flex flex-row justify-between bg-topBar-black px-15 py-1">
            <img src={logo} alt="" />
            <LinkAddress>
                <span className="mx-5"> <a href="https://www.chainx.org/en/" target="_black">ChainX</a> </span>
                <span className="mx-5"><a href="https://ksmslot.chainx.cc/" target="_black">Crowdloan</a></span>
                <span className="ml-5"><a href="https://coming-application.oss-cn-hongkong.aliyuncs.com/coming-website/SherpaX%20Lightpaper.pdf" target="_black">Lightpaper</a></span>
            </LinkAddress>

        </div>
    );
}

export default Home;
