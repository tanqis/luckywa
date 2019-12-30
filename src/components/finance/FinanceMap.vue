// <template>
//   <div class="statisticalChart">
//     <el-alert
//       style="margin-top: 20px;"
//       :title="financeIip"
//       type="info"
//       :closable="false"
//       show-icon
//     >
//     </el-alert>
//     <div class="view" ref="totalTrend"></div>
//     <div class="view" ref="investorProfit"></div>
//     <div class="view" ref="userNumbel"></div>
//     <div class="view" ref="historyTrend"></div>
//   </div>
// </template>
// <script>
// var echarts = require('echarts');
// require('echarts/lib/chart/bar');
// require('echarts/lib/chart/line');
// require('echarts/lib/chart/pie');
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
// require('echarts/lib/component/legend');
// // {
// //         "name": "金融投资",
// //         "style": "",
// //         "icon": "el-icon-pie-chart",
// //         "class": "",
// //         "url": "/financeMap"
// //     },
// export default {
//   data() {
//     return {
//       financeByUserData: [],
//       financeIip: '',
//       financeData: []
//     };
//   },
//   created() {
//     const _this = this;
//     this.getFinanceByUserData()
//       .then(res => {
//         _this.financeByUserData = res;
//         _this.financeIip = res.financeIip;
//         _this.pushTotalTrend();
//         _this.pushKMap();
//         _this.pushUserNumbel();
//         _this.pushInvestorProfit();
//         _this.pushHistoryTrend();
//         const data = this.financeByUserData;
//         if (data.isShowTip) {
//           this.$alert(data.showTipContent, '温馨提示', {
//             confirmButtonText: 'ok',
//             dangerouslyUseHTMLString: true,
//             callback: action => {}
//           });
//         }
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   },
//   mounted() {},
//   methods: {
//     getFinanceData() {
//       this.$axios('./static/finance.json').then(msg => {
//         this.financeData = msg.data;
//       });
//     },
//     getFinanceByUserData() {
//       return new Promise((resolve, reject) => {
//         this.$axios('./static/financeByUser.json')
//           .then(res => {
//             resolve(res.data);
//           })
//           .catch(err => {
//             reject(err);
//           });
//       });
//     },
//     pushTotalTrend() {
//       const datas = this.financeByUserData.totalTrend;
//       let axisDate = [],
//         axisValue = [];
//       for (let i = 0; i < datas.length; i++) {
//         var rows = datas[i];
//         axisDate.push(rows.date);
//         axisValue.push(rows.total);
//       }
//       const minValue = Math.min.apply(null, axisValue),
//         maxValue = parseInt(Math.max.apply(null, axisValue)) + 200;
//       console.log(minValue);
//       const myChart = echarts.init(this.$refs.totalTrend);
//       let option = {
//         title: {
//           text: '投资总值趋势图'
//         },
//         tooltip: {
//           trigger: 'axis',
//           formatter: function(params) {
//             return params[0].axisValue + '<br/>总值 : $' + params[0].value;
//           }
//         },
//         grid: {
//           x: 50,
//           x2: 40
//         },
//         toolbox: {
//           show: true,
//           feature: {
//             mark: { show: true },
//             dataView: { show: true, readOnly: false },
//             magicType: { show: true, type: ['line', 'bar'] },
//             restore: { show: true },
//             saveAsImage: { show: true }
//           }
//         },
//         xAxis: [
//           {
//             type: 'category',
//             boundaryGap: false,
//             data: axisDate
//           }
//         ],
//         yAxis: [
//           {
//             type: 'value',
//             min: minValue,
//             max: maxValue,
//             axisLabel: {
//               formatter: '${value}'
//             }
//           }
//         ],
//         series: [
//           {
//             name: '总值',
//             type: 'line',
//             data: axisValue,
//             lineStyle: {
//               color: '#fe6464'
//             },
//             markLine: {
//               data: [{ type: 'average', name: '平均值' }]
//             }
//           }
//         ]
//       };
//       myChart.setOption(option, true);
//     },
//     pushKMap() {},
//     pushUserNumbel() {
//       const datas = this.financeByUserData.userBasic;
//       const accountDatas = this.financeByUserData.accountBasic;
//       let pieDatas = [];
//       for (let i = 0; i < datas.length; i++) {
//         var rows = datas[i];
//         pieDatas.push({ name: rows.asName, value: rows.quotient });
//       }
//       const myChart = echarts.init(this.$refs.userNumbel);
//       let option = {
//         title: {
//           text: '总:' + accountDatas.quotientTotal + '份',
//           x: 'center',
//           y: '50%',
//           itemGap: 20,
//           textStyle: {
//             color: 'rgba(30,144,255,0.8)',
//             fontFamily: '微软雅黑',
//             fontSize: 18,
//             fontWeight: 'bolder'
//           }
//         },
//         color: [
//           '#62c1fe',
//           '#5ad5b6',
//           '#ff9233',
//           '#d87aec',
//           '#fe6464',
//           '#EC87BF',
//           '#bcd55a',
//           '#d59e5a',
//           '#6d64fe'
//         ],
//         tooltip: {
//           trigger: 'item',
//           formatter: '{a} <br/>{b} : {c}份 ({d}%)'
//         },
//         series: [
//           {
//             name: '份额占比',
//             type: 'pie',
//             center: ['50%', '55%'],
//             radius: ['30%', '65%'],
//             x: '20%',
//             data: pieDatas,
//             itemStyle: {
//               emphasis: {
//                 shadowBlur: 10,
//                 shadowOffsetX: 0,
//                 shadowColor: 'rgba(0, 0, 0, 0.5)'
//               }
//             }
//           }
//         ]
//       };
//       myChart.setOption(option, true);
//     },
//     pushInvestorProfit() {
//       const datas = this.financeByUserData.userBasic;
//       const accountDatas = this.financeByUserData.accountBasic;
//       const totalTrendDatas = this.financeByUserData.totalTrend;
//       const newTotalSize = totalTrendDatas[totalTrendDatas.length - 1].total;
//       let userData = [],
//         startTotalData = [],
//         balanceData = [];
//       for (let i = 0; i < datas.length; i++) {
//         var rows = datas[i];
//         userData.push(rows.asName);
//         startTotalData.push(accountDatas.singleBalance * rows.quotient);
//         const _balance =
//           ((newTotalSize - accountDatas.balanceTotal) /
//             accountDatas.quotientTotal) *
//           rows.quotient;

//         balanceData.push(parseFloat(_balance.toFixed(2)));
//       }
//       const myChart = echarts.init(this.$refs.investorProfit);
//       let option = {
//         title: {
//           text: '份额投资利润'
//         },
//         tooltip: {
//           trigger: 'axis',
//           axisPointer: {
//             type: 'shadow'
//           },
//           formatter: function(params) {
//             return (
//               params[0].name +
//               '(' +
//               ((params[0].value / accountDatas.balanceTotal) * 100).toFixed(2) +
//               '%)' +
//               '<br/>盈利额 : $' +
//               params[1].value.toFixed(2) +
//               '<br/>盈利率 : ' +
//               ((params[1].value / params[0].value) * 100).toFixed(2) +
//               '%<br/>' +
//               params[1].seriesName +
//               ' : $' +
//               (params[1].value + params[0].value).toFixed(2) +
//               '<br/>' +
//               params[0].seriesName +
//               ' : $' +
//               params[0].value.toFixed(2)
//             );
//           }
//         },
//         legend: {
//           data: ['投资额', '总市值'],
//           x: 150,
//           y: 20
//         },
//         grid: {
//           x: 50,
//           x2: 40
//         },
//         xAxis: [
//           {
//             type: 'category',
//             data: userData
//           }
//         ],
//         yAxis: [
//           {
//             type: 'value',
//             boundaryGap: [0, 0.1],
//             axisLabel: {
//               formatter: '${value}'
//             }
//           }
//         ],
//         series: [
//           {
//             name: '投资额',
//             type: 'bar',
//             stack: 'sum',
//             barCategoryGap: '50%',
//             itemStyle: {
//               normal: {
//                 color: '#5ad5b6',
//                 barBorderColor: '#5ad5b6',
//                 barBorderWidth: 1,
//                 barBorderRadius: 0,
//                 label: {
//                   show: true,
//                   position: 'insideTop'
//                 }
//               }
//             },
//             data: startTotalData
//           },
//           {
//             name: '总市值',
//             type: 'bar',
//             stack: 'sum',
//             itemStyle: {
//               normal: {
//                 color: '#fe6464',
//                 barBorderColor: 'tomato',
//                 barBorderWidth: 1,
//                 barBorderRadius: 0,
//                 label: {
//                   show: true,
//                   position: 'top',
//                   formatter: function(params) {
//                     for (
//                       var i = 0, l = option.xAxis[0].data.length;
//                       i < l;
//                       i++
//                     ) {
//                       if (option.xAxis[0].data[i] == params.name) {
//                         return (
//                           option.series[0].data[i] + params.value
//                         ).toFixed(2);
//                       }
//                     }
//                   },
//                   textStyle: {
//                     color: 'tomato'
//                   }
//                 }
//               }
//             },
//             data: balanceData
//           }
//         ]
//       };
//       myChart.setOption(option);
//     },
//     pushHistoryTrend() {
//       const historyTrend = this.financeByUserData.historyTrend;
//       let stage = [],
//         startValue = [],
//         endValue = [];
//       for (let i = 0; i < historyTrend.length; i++) {
//         var rows = historyTrend[i];
//         stage.push(rows.stage);
//         startValue.push(rows.startValue);
//         endValue.push(rows.endValue);
//       }
//       const myChart = echarts.init(this.$refs.historyTrend);
//       let option = {
//         title: {
//           text: '往期盈利回顾'
//         },
//         tooltip: {
//           trigger: 'axis',
//           formatter: function(params) {
//             return (
//               '[' +
//               params[0].name +
//               ']投资回报对比<br/>盈利率' +
//               ':' +
//               (
//                 ((parseFloat(params[1].value) - parseFloat(params[0].value)) /
//                   parseFloat(params[0].value)) *
//                 100
//               ).toFixed(2) +
//               '%<br/>' +
//               params[0].seriesName +
//               ':$' +
//               params[0].value +
//               '<br/>' +
//               params[1].seriesName +
//               ':$' +
//               params[1].value +
//               '<br/>'
//             );
//           }
//         },
//         legend: {
//           data: ['总投资', '总市值'],
//           x: 150,
//           y: 20
//         },
//         grid: {
//           x: 50,
//           x2: 40
//         },
//         xAxis: [
//           {
//             type: 'category',
//             data: stage
//           }
//         ],
//         yAxis: [
//           {
//             type: 'value',
//             axisLabel: {
//               formatter: '${value}'
//             }
//           }
//         ],
//         series: [
//           {
//             name: '总投资',
//             type: 'bar',
//             data: startValue,
//             itemStyle: {
//               normal: {
//                 color: '#5ad5b6'
//               }
//             },
//             markLine: {
//               data: [{ type: 'average', name: '平均值' }]
//             }
//           },
//           {
//             name: '总市值',
//             type: 'bar',
//             data: endValue,
//             itemStyle: {
//               normal: {
//                 color: '#fe6464'
//               }
//             },
//             markLine: {
//               data: [{ type: 'average', name: '平均值' }]
//             }
//           }
//         ]
//       };
//       myChart.setOption(option, true);
//     }
//   }
// };
// </script>
// <style scoped>
// .statisticalChart {
//   width: 100%;
//   overflow: auto;
// }
// .statisticalChart div.view {
//   height: 300px;
//   margin: 20px 0;
//   border-radius: 3px;
//   background-color: #fff;
//   border: 1px solid #e3e3e3;
//   -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
//   box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
// }
// </style>
