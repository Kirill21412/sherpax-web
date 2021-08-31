
import React from "react";
import fee from "../../assets/icon_fee.svg"
import treasury from "../../assets/icon_treasury.svg"
import governance from "../../assets/img_governance.svg"
import smart from "../../assets/icon_smart.svg"
import styled from 'styled-components';
import KsxItem from "../../components/KsxItem";



function Item(): React.ReactElement
{
    const KsxList = styled.div`
      &>div:nth-child(n+2){
          border-left-width:0px;
      }
    `;

    return (

        <KsxList className="flex flex-row justify-center px-15">
            <KsxItem ksxName="Fee" ksxContent="As a transaction gas fee on the SherpaX network" ksximage={fee}  ></KsxItem>
            <KsxItem ksxName="Treasury" ksxContent="Get your projects funded from the treasury." ksximage={treasury} ></KsxItem>
            <KsxItem ksxName="Governance" ksxContent="Empowers the community to vote, elect council members, guide the development through on-chain governance." ksximage={governance} ></KsxItem>
            <KsxItem ksxName="Deployment" ksxContent="Enables developers to deploy new DApps and smart contracts on SherpaX " ksximage={smart} ></KsxItem>
        </KsxList>
    );
}

export default Item;
