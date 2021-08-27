import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Background from "../components/Background/BackgroundMobile";
import FooterMobile from "../components/Footer/FooterMobile";
import HeaderMobile from "../components/HeaderMobile";
import FirstPage from "../mobileHomePage/firstMbolPage";
import SecondPage from "../mobileHomePage/secondMbolPage";
import FifthPage from "./fifthMbolPage";
import FourthPage from "./fourthMbolPage";
import SixthPage from "./sixthMbolPage";
import ThirdPage from "./thirdMbolPage";

const MbolWrap = styled.div`
  //   * {
  //     font-family: Helvetica-Light, Helvetica;
  //   }
`;

const MobileHomePage = () => {
  return (
    <>
      <HeaderMobile />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
    </>
  );
};

export default MobileHomePage;
