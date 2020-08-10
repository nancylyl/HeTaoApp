import React, { Component } from 'react'
import {Button, Calendar, Icon, NavBar,WhiteSpace } from "antd-mobile";
import './Patient.scss'
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>
        <select name="" id="" className='select'>
            <option value="1">全国</option>
            <option value="2">北京</option>
            <option value="3">上海</option>
        </select>
    </div>
);

export default class Patient extends Component {
    goback=()=>{
        history.goBack();
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        var myChart1 = echarts.init(document.getElementById('main1'));
        var myChart2 = echarts.init(document.getElementById('main2'));
        var myChart3 = echarts.init(document.getElementById('main3'));
        // 绘制图表
        myChart.setOption({
            legend: {
                // right: 40,
            },
            tooltip: {},
            xAxis: {
                data: ["75%", "50~75%", "30~50%", "30%以下"]
            },
            yAxis: {
                name:'人数',
                lineHeight: 40,
                height:40
            },
            series: [{
                name: '人数',
                type: 'bar',
                data: [0, 1, 15, 30]
            }],
            color:['rgb(0,204,153)'],
        });
        myChart1.setOption ({
            legend: {
                orient: "vertical",
                right: 40,
                data: ["男", "女"]
            },
            series: [{
                type: "pie",
                data: [{
                    value: 78,
                    name: "男"
                }, {
                    value: 22,
                    name: "女"
                }],

            }]
        });
        myChart2.setOption ({
            legend: {
                orient: "vertical",
                right: 'right',
                data: ["局灶性", "不稳定","全面性","癫痫性"]
            },
            series: [{
                type: "pie",
                data: [{
                    value: 10,
                    name: "局灶性"
                }, {
                    value: 20,
                    name: "不稳定"
                }, {
                    value: 38,
                    name: "全面性"
                }, {
                    value: 28,
                    name: "癫痫性"
                }],
                hoverOffset: 10
            }]
        });
        myChart3.setOption ({
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                right: 'right',
                data: ['其他不适', '恶心呕吐', '烦躁易怒', '皮肤过敏', '疲劳乏力','头痛晕眩','镇静嗜睡','体重变化']
            },
            series: [
                {
                    name: '不良反应',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 335, name: '其他不适'},
                        {value: 310, name: '恶心呕吐'},
                        {value: 234, name: '烦躁易怒'},
                        {value: 135, name: '皮肤过敏'},
                        {value: 1548, name: '疲劳乏力'},
                        {value: 1548, name: '头痛晕眩'},
                        {value: 1548, name: '镇静嗜睡'},
                        {value: 1548, name: '体重变化'},
                    ]
                }
            ]
        })
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" onClick={this.goback}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                >患者管理</NavBar>
                <WhiteSpace />
                <PlaceHolder />
                <div className='Upbox'>
                    <Button className='upbox' href='/doc/allPatient'>
                        <i className={['iconfont  icon-huanzhehebing']}></i>
                        <span>所有患者</span>
                    </Button>
                    <Button className='upbox' href='/doc/FocusonPatient'>
                        <i className={['iconfont  icon-huanzhehebing']}></i>
                        <span>关注患者</span>
                    </Button>
                </div>
                <h3>发作频次下降率</h3>
                <div id="main" style={{ width: 1200, height: 400 }}></div>
                <h3>性别比例</h3>
                <div id="main1" style={{ width: 1200, height: 400 }}></div>
                <h3>发作类型</h3>
                <div id="main2" style={{ width: 1200, height: 400 }}></div>
                <h3>患者不良反应</h3>
                <div id="main3" style={{ width: 1200, height: 400 }}></div>

                <div className='bot'></div>
            </div>
        )
    }
}
