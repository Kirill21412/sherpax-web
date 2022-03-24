import React from 'react';
import styled from 'styled-components';
import LineChart from './lineChart';
const ContentSherpaX = styled.div`
    width: 44rem;
    font-size: 16px;
    font-weight: 300;
    color: #ffffff;
    line-height: 24px;
    margin: 42px 0;
    text-align: center;
  `;
const Ksx = styled.div`
    height: 38px;
    font-size: 32px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 38px;
  `;
const DetailsBtn = styled.div`
    width: fit-content;
    background: linear-gradient(158deg, #0097FF 0%, #B930C0 100%);
    border-radius: 36px;
    cursor: pointer;
    height: fit-content;
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
    bottom:8rem;
    color: white;
    display: flex;
    flex-direction: row;
    >span{
      display: inline-flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 72px;
      font-size: 16px;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 24px;
      :nth-child(1){
        margin-left: 3rem;
      }
      :nth-child(2){
        margin-left: 5.5rem;
      }
    }
  `

function Charter(): React.ReactElement {


  return (
    <>
      <div className="flex flex-col justify-center" style={{backgroundColor: 'black'}}>
        <div className="flex flex-col justify-center mt-10" style={{margin: '5rem auto 5rem auto'}}>
          <Ksx>KSX DISTRIBUTION</Ksx>
          <div style={{width: '100px', height: '4px', background: '#FFFFFF', margin: '1rem auto'}}></div>
        </div>
        <div className="relative flex flex-row justify-center">
          <LineChart/>
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
  );
}

export default Charter;
