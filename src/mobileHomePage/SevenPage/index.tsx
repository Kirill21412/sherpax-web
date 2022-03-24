import React from 'react';
import Child3Item from '../../pages/CharterPage/circle';
import styled from 'styled-components';
import LineChart from '../../pages/CharterPage2/lineChart';

const TitleContent = styled.div`
    color: #FFFFFF;
    padding: 2vw 8vw;
    font-size: 7.2vw;
    font-weight: bold;
    line-height: 8.667vw;
    max-width: 80vw;
  `;
const ContentSherpaX = styled.div`
  padding: 2rem 2rem;
    font-size: 16px;
    font-weight: 300;
    color: #ffffff;
    line-height: 24px;
  `;
// const ContentSherpaX = styled.div`
//     width: 44rem;
//     font-size: 16px;
//     font-weight: 300;
//     color: #ffffff;
//     line-height: 24px;
//     margin: 42px 0;
//     text-align: center;
//   `;
const Ksx = styled.div`
  font-size: 7.2vw;
  font-weight: bold;
  line-height: 8.667vw;
  color: #FFFFFF;
`;
const DetailsBtn = styled.div`
  width: fit-content;
  background: linear-gradient(158deg, #0097FF 0%, #B930C0 100%);
  border-radius: 36px;
  cursor: pointer;
  height: fit-content;
  margin-bottom: 2rem;
  > span {
    display: inline-flex;
    padding: 11px 40px;
    font-size: 22px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 32px;
  }
`;

const LineChartContent = styled.div`
  position: absolute;
  bottom:4rem;
  color: white;
  display: flex;
  flex-direction: row;
  >span{
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 72px;
    font-size: 12px;
    color: #FFFFFF;
    line-height: 12px;
    :nth-child(1){
      margin-left: 3.5rem;
    }
    :nth-child(2){
      margin-left: 1rem;
    }
  }
`


export function SevenPage(): React.ReactElement {
  return (
    <>
      <div className="flex flex-col justify-center" style={{ backgroundColor: 'black'}}>
        <div className="flex flex-col justify-center">
          <TitleContent>SherpaX Token Allocation</TitleContent>
          <ContentSherpaX>
            When the SherpaX network was launched, the total supply of SherpaX tokens reached 21,000,000 linearly unlocked
            block-by-block, which were allocated to the parliament-controlled CID NFT mining(10%), PCX holders (45%),
            giveaway (2%) , Governed by the community(Dao) (43%).</ContentSherpaX>
        </div>
        <Child3Item width={'100%'} height={'25rem'}/>
      </div>
      <div className="flex flex-col justify-center" style={{backgroundColor: 'black'}}>
        <div className="flex flex-col justify-center mt-10" style={{margin: '2vw 8vw'}}>
          <Ksx>KSX DISTRIBUTION</Ksx>
          <div style={{width: '100px', height: '1px', background: '#838383', marginTop:'5vw'}}></div>
        </div>
        <div className="flex flex-row justify-center relative">
          <LineChart width={'100%'} height={'20rem'}/>
          <LineChartContent>
            <span>3.1 KSX/ BLOCK <br/><span>OR</span> 44707.6 KSX/ DAY</span>
            <span>0.5 KSX/ BLOCK <br/> <span>OR</span> 7310 KSX/ DAY</span>
          </LineChartContent>
        </div>

        <div className="flex flex-col justify-center" style={{alignItems:'center'}}>
          <ContentSherpaX>
            With the generation of blocks, the KSX owned by the mining users participating in ComingChat and PCX holders
            will be unlocked in a linear manner. The details are shown in the figure, and the github link is attached.
          </ContentSherpaX>
          <DetailsBtn>
          <span>
            <a href="https://github.com/chainx-org/KSX-airdrop" target="_black">Details</a>
          </span>
          </DetailsBtn>
        </div>
      </div>
    </>
    )
}