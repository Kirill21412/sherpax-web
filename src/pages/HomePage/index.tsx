import React from "react";
import Header from "../../components/Header";
import styled from 'styled-components';
import Background from "../../components/Background";
import FirstPage from "../FirstPage";
import SecondPage from "../SecondPage";
import ThirdPage from "../ThirdPage";
import FourthPage from "../FourthPage";
import LastPage from "../LastPage";


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
        </>
    );
}

export default Home;
