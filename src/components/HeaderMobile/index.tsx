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
        position:flex;
        flex-direction:row;
        justify-content:space-between;
        background:black;
        height:7.64vh;
        padding:2vh 5.33vw;
        margin:auto 0;
    `;
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () =>
    {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <MenuButtonWrapper>
                <div style={{ position: 'fixed', top: '0', zIndex: 1000 }}>
                    <MobileBox >
                        <img src={logo} alt="" style={{ width: '24vw', height: '4vh' }}></img>
                        <MenuContent />
                    </MobileBox>
                </div>
            </MenuButtonWrapper>
        </>
    );
}

export default HeaderMobile;
