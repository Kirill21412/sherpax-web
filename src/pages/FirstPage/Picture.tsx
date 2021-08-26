import React from "react";
import bg_circle from "../../assets/bg_1.svg"
import circle from "../../assets/img1.svg"
import styled from 'styled-components';



function Picture(): React.ReactElement
{


    const BgDiv = styled.div`
        z-index:-1;
        position:absolute;
        right:0;
    `;

    const Bgcontent = styled.div`
        top: 114px;
        z-index:-1;
        position:absolute;
        right:0;
    `;


    return (
        <div className="px-15">
            <BgDiv>
                <img src={bg_circle} alt="" className="w-40" />
            </BgDiv>
            <Bgcontent className="">
                <img src={circle} alt="" className="w-40" />
            </Bgcontent>
        </div>
    );
}

export default Picture;
