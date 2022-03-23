import React from 'react';
import img from '../../assets/img4.svg';
import imgSherpax from '../../assets/sherpax.svg';

import styled from 'styled-components';
import Child3Item from './circle';


function CharterPage(): React.ReactElement {
  const TitleContent = styled.div`
    max-width: 25.75rem;
    font-size: 32px;
    font-family: Helvetica-Bold, Helvetica;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 38px;
  `;
  const ContentSherpaX = styled.div`
    max-width: 27.625rem;
    font-size: 16px;
    font-family: Helvetica-Light, Helvetica;
    font-weight: 300;
    color: #ffffff;
    line-height: 24px;
    margin-top: 42px;
  `;


  return (
    <div className="flex flex-row justify-center" style={{padding: '5rem 0', backgroundColor: 'black'}}>
      <div className="flex flex-col justify-start" style={{margin: 'auto 0px auto 8rem'}}>
        <TitleContent>SherpaX Token <br/> Allocation</TitleContent>
        <ContentSherpaX>
          When the SherpaX network was launched, the total supply of SherpaX tokens reached 21,000,000 linearly unlocked
          block-by-block, which were allocated to the parliament-controlled CID NFT mining(10%), PCX holders (45%),
          giveaway (2%) , Governed by the community(Dao) (43%).</ContentSherpaX>
      </div>
      <Child3Item/>
    </div>
  );
}

export default CharterPage;
