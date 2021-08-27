import React from "react";

import styled from 'styled-components';
interface KsxItemProps
{
    ksxName: String;
    ksxContent: String;
    ksximage: any
}
function KsxItem({ ksxName,
    ksxContent,
    ksximage }: KsxItemProps): React.ReactElement<KsxItemProps>
{

    const Box = styled.div`
        width: 40vw;
        height: 423px;
        padding:44px 35px 30px 35px;
        background: #000000;
        border: 1px solid #4D4D4D;
        display:flex;
        flex-direction: column;
    `;

    const KsxName = styled.div`
        height: 37px;
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 37px;
    `;
    const KsxContext = styled.div`
        font-size: 12px;
        font-family: Helvetica-Light, Helvetica;
        font-weight: 300;
        color: #FFFFFF;
        line-height: 24px;
        margin-top:40px;
        `;

    return (
        <Box>
            <KsxName>{ksxName}</KsxName>
            <KsxContext>{ksxContent}</KsxContext>
            <div style={{ width: '100px', height: '1px', position: "absolute" }}>
                <img src={ksximage} alt="" style={{ position: "absolute", bottom: '-330px' }} />
            </div>
        </Box>
    );
}

export default KsxItem;
