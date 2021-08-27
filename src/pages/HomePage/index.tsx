import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import styled from 'styled-components';
import Background from "../../components/Background/index";
import FirstPage from "../FirstPage";
import SecondPage from "../SecondPage";
import ThirdPage from "../ThirdPage";
import FourthPage from "../FourthPage";
import LastPage from "../LastPage";
import Footer from "../../components/Footer";


function Home(): React.ReactElement
{
    const FitMedia = styled.div`
        margin: 0 auto;
        max-width:1280px;
        position: relative;
        // @media screen and (min-width: 1366px){
        //     width: 1280px
        // }
        // @media screen and (min-width: 1600px){
        //     width: 1500px
        // }
        // @media screen and (min-width: 1800px){
        //     width: 1700px
        // }
        // @media screen and (min-width: 1920px){
        //     width: calc(100% - 80px)
        // }
    `;
    const [routeName, setRouteName] = useState<string>("");
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isIOS, setIsIOS] = useState<boolean>(false);
    const [isAndroid, setIsAndroid] = useState<boolean>(false);
    const [isSafari, setIsSafari] = useState<boolean>(false);
    const [isBrowser, setIsBrowser] = useState<boolean>(true);
    const [ua, setUa] = useState<string>("");
    const [groupString, setGroupString] = React.useState<string>("");
    const [inviteString, setInviteString] = useState<string>("");
    const [isWindows, setIsWindows] = useState(false);
    useEffect(() =>
    {
        // if (isIOS || isAndroid) {
        //   setBrowserType("MBOL");
        // } else if (ua && !isIOS && !isAndroid) {
        //   setBrowserType("CBOL");
        // }
    }, [isIOS, isAndroid, ua]);
    useEffect(() =>
    {
        ua?.match(/windows/) && setIsWindows(true);
    }, [ua]);
    useEffect(() =>
    {
        if (typeof window !== "undefined") {
            setUa(window.navigator.userAgent.toLowerCase());
        }
    });
    useEffect(() =>
    {
        ua?.match(/(iphone|ipad|ipod)/) && setIsIOS(true);
        ua?.match(/android[\s\/]([\d\.]+)/) && setIsAndroid(true);
    }, [ua]);
    return (
        <>
            <Header />
            <Background />
            <FitMedia>
                <FirstPage />
                <SecondPage />
                <ThirdPage />
                <FourthPage />
                <LastPage />
            </FitMedia>
            <Footer />
        </>
    );
}

export default Home;
