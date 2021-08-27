import React from "react";
import logo from "../../assets/SherpaX_logo_white.svg"
import styled from 'styled-components';
function HeaderMobile(): React.ReactElement
{
    const MobileBox = styled.div`
        width:100vw;
    
    `;
    const LinkAddress = styled.div`
        color: #FFFFFF;
        height: 1rem;
        line-height: 1rem;
        font-size: 1rem;
        font-family: NotoSansSC-Regular, NotoSansSC;
        font-weight: 400;
    `;
    return (
        <MobileBox className="flex flex-row justify-between bg-topBar-black" style={{ width: '100vw', height: '5vh' }}>
            <img src={logo} alt="" className="px-1 py-1" />
            <LinkAddress>
                <span className="mx-5">=</span>
            </LinkAddress>

        </MobileBox>
    );
}

export default HeaderMobile;
