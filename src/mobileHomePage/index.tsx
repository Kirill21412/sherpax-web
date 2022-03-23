import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Background from "../components/Background/BackgroundMobile";
import FooterMobile from "../components/Footer/FooterMobile";
import MenuContent from "../components/Header/MenuContent";
import HeaderMobile from "../components/HeaderMobile";
import { MenuButtonWrapper } from "../components/MenuButton/styles";
import FirstPage from "../mobileHomePage/firstMbolPage";
import SecondPage from "../mobileHomePage/secondMbolPage";
import ThirdPage from "./thirdMbolPage";
import FourthPage from "./fourthMbolPage";
import FifthPage from "./fifthMbolPage";
import SixthPage from "./sixthMbolPage";
import FooterPage from "./footerMbolPage";
import { SevenPage } from "./SevenPage";

const MbolWrap = styled.div`
  //   * {
  //     font-family: Helvetica-Light, Helvetica;
  //   }
`;

const MobileHomePage = () =>
{
  return (
    <>
      <HeaderMobile />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SevenPage/>
      <FooterPage />
      <div className={'showMessage'} style={{
        display: 'none', position: 'fixed',
        bottom: '17vh',
        color: 'white',
        width: '100%',
        textAlign: 'left',
      }}>Copy Successed</div>

    </>
  );
};

export default MobileHomePage;
