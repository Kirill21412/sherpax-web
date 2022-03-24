import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import styled from 'styled-components';

interface props {
  width?:string
  height?:string
}
const Child3Item = ({width,height}:props) => {

  const initChart = () => {
    const element = document.getElementById('chart3');
    // @ts-ignore
    let myChart = echarts.init(element);
    myChart.clear();

    const chartData = [
      {
        value: 450,
        name: 'PCX holders',
      },
      {
        value: 430,
        name: 'Governed by the community',
      },
      {
        value: 100,
        name: 'Virtual mining',
      },
      {
        value: 20,
        name: 'Giveaway',
      }
    ];
    const colorList = [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: '#2184FB',
        },
        {
          offset: 1,
          color: '#32E1EC',
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#DD1359',
          },
          {
            offset: 1,
            color: '#F629B2',
          },
        ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: '#FFDB1E',
        },
        {
          offset: 1,
          color: '#FFBF17',
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: '#50F34A',
        },
        {
          offset: 1,
          color: '#7AFF21',
        },
      ]),
    ];

    const sum = chartData.reduce((per, cur) => per + cur.value, 0);

    const pieData1 = [];
    const pieData2 = [];
    for (let i = 0; i < chartData.length; i++) {
      pieData1.push({
        ...chartData[i],
        itemStyle: {
          borderRadius: 100,
          shadowColor: '#2a2a34',
          shadowBlur: 5,
          shadowOffsetY: 0,
          shadowOffsetX: 0,
          borderColor: '#2a2a34',
          borderWidth: 2,
        },
      });

      pieData2.push({
        ...chartData[i],
        itemStyle: {
          borderRadius: 10,
          color: colorList[i],
          opacity: 0.1,
          shadowColor: '#000',
          shadowBlur: 1,
          shadowOffsetY: 5,
          shadowOffsetX: 0,
        },
      });
    }

    let option = {
      // backgroundColor: {
      //   repeat: "repeat",
      // },
      tooltip: {
        trigger: 'item',
        formatter: (item: any) => {
          let html = '';
          const itemColor = item.color.colorStops[0].color
          const itemData = item.data;
          html += `<div style="font-size: 14px;line-height: 22px; background: white">
                   <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${itemColor};"></span>
                  <span>${itemData.name}</span>
                  <span style="font-weight: 500;">${itemData.value / 10 + '%'}</span>
                </div>`;
          return html;
        }
      },
      backgroundColor: {
        repeat: 'repeat',
      },
      title: [
        {
          text: 'SherpaX Token',
          x: '50%',
          y: '44%',
          textAlign: 'center',
          textStyle: {
            fontSize: '20',
            width: '2px',
            fontWeight: '500',
            color: '#FFFFFF',
            textAlign: 'center',
            textShadowColor: '#000',
            textShadowBlur: '1',
            textShadowOffsetX: 2,
            textShadowOffsetY: 2,
          },
          z:1
        },
        {
          text: 'Allocation',
          x: '50%',
          y: '50%',
          textAlign: 'center',
          textStyle: {
            fontSize: '20',
            width: '2px',
            fontWeight: '500',
            color: '#FFFFFF',
            textAlign: 'center',
            textShadowColor: '#000',
            textShadowBlur: '1',
            textShadowOffsetX: 2,
            textShadowOffsetY: 2,
          },
          z:1
        },
      ],
      legend: {
        bottom: '5%',
        left: 'center',
        orient: 'horizontal',
        itemGap: 18,
        itemWidth: 12,
        itemHeight: 12,
        shadowBlur: 10,
        shadowOffsetY: 0,
        shadowOffsetX: 0,
        selectedMode: false,
        textStyle: {
          color: '#D8DDE3',
          position:"inner",
          rich: {
            name: {
              verticalAlign: 'right',
              align: 'right',
              fontSize: 12,
              color: '#D8DDE3',
            },
            percent: {
              padding: [0, 0, 0, 10],
              color: '#D8DDE3',
              fontSize: 12,
            },
          },
        },
        formatter: (name: any) => {
          const item = chartData.find((i) => {
            return i.name === name;
          });
          // @ts-ignore
          const value = ((item.value / sum) * 100).toFixed(0);
          return '{name|' + name + '}' + '{percent|' + value + '}' + ' %';
        },
      },
      color: colorList,
      series: [
        {
          type: 'pie',
          z: 3,
          roundCap: true,
          radius: ['44%', '51%'],
          center: ['50%', '50%'],
          labelLine: {
            show: false,
          },
          label: {
            show: false,
            position: 'center'
          },
          data: pieData1,
          emphasis: {
            label: {
              show: true,
              borderRadius:20,
              width:160,
              height:60,
              overflow:'break',
              fontSize: 20,
              fontWeight: 'bold',
              color: '#FFFFFF',
              lineHeight: 24,
              backgroundColor:'black'
            },
          },
        },
        {
          type: 'pie',
          z: 2,
          radius: ['40%', '55%'],
          center: ['50%', '50%'],
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          silent: true,
          data: pieData2,
        },
      ],
    };
    // @ts-ignore
    option && myChart.setOption(option);
  };

  useEffect(() => {
    initChart();
  }, []);

  return (
    <div id="chart3" style={{width: `${width?width:'45%'}`, height:`${height?height:'600px'}`}}></div>
  );
};

export default Child3Item;


