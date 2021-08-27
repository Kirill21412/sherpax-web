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

function BackgroundMobile(): React.ReactElement
{
    const ChangeNetDiv = styled.div`
        height: 0px;
        border-top: 85.3vh solid black;
        border-bottom: 9vh solid transparent;
        position: absolute;
        z-index:-2;
    `;
    const ChangeNetDivl = styled.div`
        background: #fff;
        height:38rem;
        top:41.56rem;
        position: absolute;
        transform: skew(0deg, -2deg);
        z-index : -3;
    `;
    const ChangeNetDiv2 = styled.div`
        height: 0;
        border-bottom: 50rem solid black;
        border-top: 5rem solid transparent;
        position: absolute;
        z-index: -3;
        top: 83rem;
    `;
    const ChangeNetDiv3 = styled.div`
        background: #fff;
        height:38rem;
        top:41.56rem;
        position: absolute;
        transform: skew(0deg, -2deg);
        z-index : -3;
    `;
    const ChangeNetDiv4 = styled.div`
        height: 0;
        border-bottom: 75rem solid black;
        border-top: 10rem solid transparent;
        position: absolute;
        z-index: -2;
        top: 80rem;
    `;

    const size = ChangeSize()
    useEffect(() =>
    {
        console.log(size)
    }, [size])
    return (
        <>
            <ChangeNetDiv style={{ width: `${size.width}px`, borderLeft: `${size.width}px solid black` }} />
            <ChangeNetDivl style={{ width: `${size.width}px` }} />
            <ChangeNetDiv2 style={{ width: `${size.width}px`, borderRight: `${size.width}px solid black` }} />
            <ChangeNetDiv3 style={{ width: `${size.width}px`, top: '120rem' }} />
            <ChangeNetDiv4 style={{ width: `${size.width}px`, borderRight: `${size.width}px solid black`, top: '150rem' }} />
        </>
    );
}

export default BackgroundMobile;
