import React, { useState, useEffect, useCallback, useContext } from "react";
import Header from "../../components/Header";
import styled from 'styled-components';
import Background from "../../components/Background";


function Home(): React.ReactElement
{

    return (
        <>
            <Header />
            <Background />
        </>
    );
}

export default Home;
