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
import CharterPage from '../CharterPage';
import Charter from '../CharterPage2';


function Home(): React.ReactElement
{
    const FitMedia = styled.div`
        margin: 0 auto;
        //max-width:1280px;
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
        top: 362rem;
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
                <CharterPage/>
                <Charter/>
            </FitMedia>
            {choseItem ?
                <FooterBox >
                    <Footer />
                </FooterBox> :
                <FooterBoxS >
                    <Footer />
                </FooterBoxS>}
            <div className={'showMessage'} style={{
                display: 'none', position: 'fixed',
                bottom: '5rem',
                color: 'white',
                width: '100%',
                textAlign: 'left',
            }}>Copy Successed</div>
        </>
    );
}

export default Home;
