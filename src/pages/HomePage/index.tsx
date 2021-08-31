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
    `;

    const FooterBox = styled.div`
        position:absolute;
        z-index: 10;
        width: 100%;
        top: 262rem;
    `;
    const FooterBoxS = styled.div`
        position:absolute;
        z-index: 10;
        width: 100%;
        top: 252rem;
    `;
    const [choseItem, setChoseItem] = useState(false);

    const resizeFn = () =>
    {
        watchChangeSize();
    }
    window.addEventListener('resize', resizeFn)


    function watchChangeSize()
    {
        var offsetWid = document.documentElement.clientWidth;
        if (offsetWid <= 1000) {
            setChoseItem(true)
        } else {
            setChoseItem(false)
        }
    }
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
            {choseItem ? <FooterBox >
                <Footer />
            </FooterBox> : <FooterBoxS >
                <Footer />
            </FooterBoxS>}

        </>
    );
}

export default Home;
