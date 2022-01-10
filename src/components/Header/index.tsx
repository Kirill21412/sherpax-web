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
    margin: 1rem 1rem;
	`;
	const linkList = [{name: 'ChainX', url: 'https://www.chainx.org/en/'}, {
		name: 'Wallet',
		url: 'https://sherpax.chainx.org/'
	}, {name: 'Scan', url: 'https://sherpaxscan.chainx.org/'}, {
		name: 'Lightpaper',
		url: 'https://singapore-chainx.oss-ap-southeast-1.aliyuncs.com/chainx.org/Chainx.pdf?versionId=CAEQDxiBgICllPel6xciIDUyMWMzNzk0ZjgzNzRjY2ZiNzRlYzNkYTEyZGUwNzNk'
	}]

	return (
		<div className="flex flex-row justify-between bg-topBar-black px-15 py-1">
			<img src={logo} alt=""/>
			<LinkAddress>
				{linkList.map((item) => {
					return (<span className="mx-5"> <a href={item.url} target="_black">{item.name}</a> </span>)
				})}
			</LinkAddress>

		</div>
	);
}

export default Home;
