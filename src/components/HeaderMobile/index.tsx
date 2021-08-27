import React, { useState } from "react";
import logo from "../../assets/SherpaX_logo_white.svg"
import more from "../../assets/icon_more.svg"
import styled from 'styled-components';
import { MenuButtonWrapper } from "../MenuButton/styles";
import MenuContent from "../Header/MenuContent";
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
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () =>
    {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <MenuButtonWrapper>
                <MobileBox className="flex flex-row justify-between bg-topBar-black" style={{ width: '100vw', height: '5vh' }}>
                    <img src={logo} alt="" className="px-1 py-1" />
                    <MenuContent />
                </MobileBox>
            </MenuButtonWrapper>
        </>
    );
}

export default HeaderMobile;
