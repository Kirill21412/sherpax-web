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
        border-top: 33rem solid black;
        border-bottom: 291px solid transparent;
        position: absolute;
        z-index:-2;
    `;
    const ChangeNetDivl = styled.div`
        background: #fff;
        height: 38rem;
        top: 41.56rem;
        position: absolute;
        -webkit-transform: skew(0deg,2deg);
        -ms-transform: skew(0deg,2deg);
        transform: skew(0deg,2deg);
        z-index: -3;
    `;
    const ChangeNetDiv2 = styled.div`
        border-bottom: 52rem solid black;
        border-top: 10rem solid transparent;
        position: absolute;
        z-index: -3;
        
    }`;
    const ChangeNetDiv3 = styled.div`
        background: #fff;
        height: 38rem;
        top: 41.56rem;
        position: absolute;
        -webkit-transform: skew(0deg,-12deg);
        -ms-transform: skew(0deg,-12deg);
        transform: skew(0deg,-12deg);
        z-index: -3;
    `;
    const ChangeNetDiv4 = styled.div`
        height: 0;
        border-bottom: 90rem solid black;
        border-top: 23rem solid transparent;
        position: absolute;
        z-index: -2;
    `;
    const ChangeNetDiv5 = styled.div`
        height: 0;
        border-bottom: 100rem solid black;
        border-top: 23rem solid transparent;
        position: absolute;
        z-index: -2;
`;


    const size = ChangeSize()
    useEffect(() =>
    {
        console.log(size)
    }, [size])

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
            <ChangeNetDiv style={{ width: `${size.width}px`, borderLeft: `${size.width}px solid black` }} />
            <ChangeNetDivl style={{ width: `${size.width}px` }} />
            <ChangeNetDiv2 style={{ width: `${size.width}px`, borderRight: `${size.width}px solid black`, top: '80rem' }} />
            <ChangeNetDiv3 style={{ width: `${size.width}px`, top: '124rem' }} />
            {!choseItem ?
                <ChangeNetDiv4 style={{ width: `${size.width}px`, borderRight: `${size.width}px solid black`, top: '150rem' }} />
                :
                <ChangeNetDiv5 style={{ width: `${size.width}px`, borderRight: `${size.width}px solid black`, top: '150rem' }} />
            }

        </>
    );
}

export default Background;
