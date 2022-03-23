import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const LineChart = () => {

  const initChart = () => {
    const element = document.getElementById('chart4');
    // @ts-ignore
    let myChart = echarts.init(element);
    myChart.clear();

    var xdata = ['', '#1296000', '#3888000', '#9072000', '#1000000'];

    var option = {
      tooltip: {
        trigger: 'item',
        formatter: (item: any) => {
          let html = '';
          const itemColor = item.color;
          console.log(itemColor);
          html += `<div style="color: rgba(0, 0, 0, 0.65);font-size: 14px;line-height: 22px">
                ${'Block ' + item.name}</div>
                <div style="font-weight: 500;">${item.data}  KSX</div>`;
          return html;
        }
      },
      grid: {
        left: 30,
        right: 50,
        top: 50,
        bottom: 30,
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        name: 'Block',
        data: xdata,
        triggerEvent: true,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255,255,255,.2)',
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          fontSize: 12,
          fontWeight: 400,
          color: '#D5D5D5',
          lineHeight: 17,
          textShadowColor: '#000',
          textShadowOffsetY: 2,
        },
      },
      yAxis: {
        name: 'KSX',
        nameTextStyle: {
          borderType: 'dotted',
          borderDashOffset: 1,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,.2)',
          },
        },
        type: 'value',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: true,
        },
        axisLabel: {
          fontSize: 12,
          fontWeight: 400,
          color: '#D5D5D5',
          lineHeight: 17,
          textShadowColor: '#000',
          textShadowOffsetY: 2,
        },
      },
      series: [
        {
          smooth: true,
          symbol: 'circle',
          symbolSize: 12,
          type: 'line',
          lineStyle: {
                width: 6
              },
          color:'#3AA7FF',
          areaStyle: {
            color:'transparent',
          },
          data:[10321050.8,10321050.8,'-','-','-']

        },
        {
          smooth: true,
          symbol: 'circle',
          symbolSize: 12,
          type: 'line',
          color:'#3AA7FF',
          lineStyle: {
            width: 6
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'transparent'
                  }, {
                    offset: 1,
                    color: '#3AAAFF'
                  }]),
          },
          data:['-',10321050.8,18368415.2,'-','-']

        },
        {
          smooth: true,
          symbol: 'circle',
          symbolSize: 12,
          type: 'line',
          color:'#3AA7FF',
          lineStyle: {
            width: 6
          },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'transparent'
              }, {
                offset: 1,
                color: '#fff'
              }])
            },
          data:['-','-',18368415.2 ,21000000,'-']

        },
        {
          smooth: true,
          symbol: 'circle',
          symbolSize: 12,
          type: 'line',
          color:'#3AA7FF',
          lineStyle: {
            width: 6
          },
          areaStyle: {
            color:'transparent'
          },
          data:['-','-','-',21000000,21000000]

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
    <div id="chart4" style={{width: '80%', height: '600px'}}></div>
  );
};

export default LineChart;


