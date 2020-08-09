import React, { PureComponent } from 'react'
import styles from './style.module.scss'
import { Button, Card, Icon } from 'antd-mobile';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react'




export default class index extends PureComponent {
  //发作频率下降率
  option = {
    xAxis: {
      type: 'category',
      data: ['75%', '65%', '40%', '30%以下']
    },

    tooltip: {
      // triggerOn: 'none',
      formatter: function (params) {
        return params.value + "人";
      }
    },

    itemStyle: {
      // 设置扇形的颜色
      color: '#4ECCCC',

    },
    yAxis: {
      type: 'value',
      show: true,
      name: "人数"
    },
    series: [{
      data: [0, 1, 15, 30],
      type: 'bar',
      color: 'blue'
    }]
  };
  //性别比列

  optionSex = {
    title: {
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['男', '女']
    },

    series: [
      {
        type: 'pie',
        radius: '55%',
        center: ['50%', '30%'],
        data: [
          { value: 78, name: '男', itemStyle: { color: '#54B8F4' } },
          { value: 22, name: '女', itemStyle: { color: '#F4F4F4' } },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  //发作类型
  optionType = {
    title: {
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    // legend: {
    //   orient: 'vertical',
    //   left: 'left',
    //   data: ['局灶性', '不稳定', '癫痫性', '全面性']
    // },

    series: [
      {
        type: 'pie',
        radius: '55%',
        center: ['50%', '40%'],
        data: [
          { value: 10, name: '局灶性', itemStyle: { color: '#5F6977' } },
          { value: 20, name: '不稳定', itemStyle: { color: '#88C757' } },
          { value: 28, name: '癫痫性', itemStyle: { color: '#828CC6' } },
          { value: 38, name: '全面性', itemStyle: { color: '#54B8F4' } },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  //患者不良反应
  optionBadFeel = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      data: ['其他不良反应', '其他不良反应', '皮肤过敏', '疲劳乏力', '头痛眩晕', '镇静嗜睡', '体重变化']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['30%', '70%'],
        center: ['30%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'right'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '12px'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 10, name: '其他不良反应', itemStyle: { color: '#F1A4C8' } },
          { value: 20, name: '恶心呕吐', itemStyle: { color: '#ED977A' } },
          { value: 15, name: '皮肤过敏', itemStyle: { color: '#F5D581' } },
          { value: 16, name: '疲劳乏力', itemStyle: { color: '#98CDF5' } },
          { value: 25, name: '头痛眩晕', itemStyle: { color: '#93E0B5' } },
          { value: 24, name: '镇静嗜睡', itemStyle: { color: '#A4ABF9' } },
          { value: 10, name: '体重变化', itemStyle: { color: '#C47DF6' } }
        ]
      }
    ]
  }
  render () {
    return (
      <div>
        <div>
          <h2 className={styles.header}>患者列表</h2>
        </div>
        <div className={styles.quick}>
          <Button onClick={() => {
            this.props.history.push("/doc/mypatient/components/patientlist/1")
          }} className={styles.bottom} icon={<i className={['iconfont icon-dianshi']} />}>所有患者</Button>
          <Button
            onClick={() => {
              this.props.history.push("/doc/mypatient/components/patientlist/2")
            }}
            className={styles.bottom} icon={<i className={['iconfont icon-zhanghuqiehuan']} />}>关注患者</Button>
        </div>
        <div className={styles.echarts}>
          <Card>
            <Card.Header
              title="发作频率下降率"
            />
            <Card.Body>
              <ReactEcharts
                option={this.option}
                style={{ height: '250px', width: '100%' }}
                className='react_for_echarts' />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header
              title="性别比列"
            />
            <Card.Body>
              <ReactEcharts
                option={this.optionSex}
                style={{ height: '250px', width: '100%' }}
                className='react_for_echarts' />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header
              title="发作类型"
            />
            <Card.Body>
              <ReactEcharts
                option={this.optionType}
                style={{ height: '250px', width: '100%' }}
                className='react_for_echarts' />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header
              title="患者不良反应"
            />
            <Card.Body>
              <ReactEcharts
                option={this.optionBadFeel}
                style={{ height: '250px', width: '100%' }}
                className='react_for_echarts' />
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}
