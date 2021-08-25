import React, { useState, useEffect, useCallback, useContext } from "react";
import styled from 'styled-components';
function ChangeSize()
{
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    const onResize = useCallback(() =>
    {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        })
    }, [])

    useEffect(() =>
    {
        window.addEventListener('resize', onResize);
        return (() =>
        {
            window.removeEventListener('resize', onResize)
        })
    }, [])

    return size;
}

function Background(): React.ReactElement
{
    const ChangeNetDiv = styled.div`
        height: 0px;
        border-top: 51.56rem solid black;
        border-bottom: 37px solid transparent;
        position: absolute;
        z-index:-1;
    `;
    const ChangeNetDivl = styled.div`
        background: #fff;
        height:38rem;
        top:51.56rem;
        position: absolute;
        transform: skew(0deg, -1deg);
        z-index : -1;
    `;
    const ChangeNetDiv2 = styled.div`
        height: 0;
        border-bottom: 30rem solid black;
        border-top: 10rem solid transparent;
        position: absolute;
        z-index: -1;
        top: 90rem;
    `;

    const size = ChangeSize()
    useEffect(() =>
    {
        console.log(size)
    }, [size])
    return (
        <>
            <ChangeNetDiv style={{ width: `${size.width}px`, borderLeft: `${size.width}px solid black` }} >
            </ChangeNetDiv>
            <ChangeNetDivl style={{ width: `${size.width}px` }}>
            </ChangeNetDivl>
            <ChangeNetDiv2 style={{ width: `${size.width}px`, borderRight: `${size.width}px solid black` }} />
            <ChangeNetDivl style={{ width: `${size.width}px`, top: '120rem' }}>
            </ChangeNetDivl>
            <ChangeNetDiv2 style={{ width: `${size.width}px`, borderRight: `${size.width}px solid black`, top: '150rem' }} />
        </>
    );
}

export default Background;
