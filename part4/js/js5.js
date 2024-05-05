window.onload = function () {
  echart01();
  echart02();
  echart03();
  echart04();
  echart05();


  function echart01() {
    var myChart = echarts.init(document.getElementById('left2'));
    var option = {
      baseOption: {
        timeline: {
          axisType: 'category',
          autoPlay: true,
          playInterval: 1000,
          data: ['2019', '2020', '2021', '2022'],
          label: {
            formatter: function (s) {
              return new Date(s).getFullYear();
            }
          }
        },
        tooltip: {},
        legend: {
          left: 'right',
          data: ['产量'],
          selected: {
            '产量（万吨）': true
          }
        },
        calculable: true,
        grid: {
          top: 80,
          bottom: 100
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: { interval: 0 },
            data: ['绿茶', '红茶', '乌龙茶', '黑茶', '白茶', '黄茶']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '产量（万吨）'
          }
        ],
        series: [
          {
            name: '产量（万吨）', type: 'bar',
            itemStyle: {
              normal: {
                color: function (params) {
                  // 为每个茶类指定不同的颜色
                  switch (params.dataIndex) {
                    case 0: return '#187a2f'; // 绿茶
                    case 1: return '#da1d23'; // 红茶
                    case 2: return '#c94930'; // 乌龙茶
                    case 3: return '#ad213e'; // 黑茶
                    case 4: return '#0aa3b5'; // 白茶
                    case 5: return '#ebb40f'; // 黄茶
                    default: return '#c23531';
                  }
                }
              }
            },
          }
        ]
      },
      options: [
        {
          title: { text: '2019六大茶类产量' },
          series: [
            {
              data: [
                { name: '绿茶', value: 185.4 },
                { name: '红茶', value: 48.2 },
                { name: '乌龙茶', value: 31.1 },
                { name: '黑茶', value: 42.6 },
                { name: '白茶', value: 1.3 },
                { name: '黄茶', value: 9.4 }
              ]
            }
          ]
        },
        {
          title: { text: '2020六大茶类产量' },
          series: [
            {
              data: [
                { name: '绿茶', value: 184.7 },
                { name: '红茶', value: 43.4 },
                { name: '乌龙茶', value: 28.7 },
                { name: '黑茶', value: 39.7 },
                { name: '白茶', value: 1.3 },
                { name: '黄茶', value: 8.2 }
              ]
            }
          ]
        },
        {
          title: { text: '2021六大茶类产量' },
          series: [
            {
              data: [
                { name: '绿茶', value: 184.3 },
                { name: '红茶', value: 40.4 },
                { name: '乌龙茶', value: 27.8 },
                { name: '黑茶', value: 37.3 },
                { name: '白茶', value: 1.4 },
                { name: '黄茶', value: 7.3 }
              ]
            }
          ]
        },
        {
          title: { text: '2022六大茶类产量' },
          series: [
            {
              data: [
                { name: '绿茶', value: 177.3 },
                { name: '红茶', value: 30.7 },
                { name: '乌龙茶', value: 27.6 },
                { name: '黑茶', value: 37.8 },
                { name: '白茶', value: 1 },
                { name: '黄茶', value: 5 }
              ]
            }
          ]
        }
      ]
    };

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
  }


}