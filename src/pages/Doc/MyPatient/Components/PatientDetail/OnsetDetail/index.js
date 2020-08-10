import React, { PureComponent } from 'react';
import { List, WhiteSpace, Button } from 'antd-mobile';
import styles from './style.module.scss';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react'
import Api from 'api/index'
import Axios from 'util/axios'

export default class index extends PureComponent {

  state = {
    dataX: [],
    dataY: [],
    loaded: false,
    data: [
      {
        id: 1,
        dattetime: '2017-9-12 12:22:12',
        desc: "患者发作2次"
      },
      {
        id: 2,
        dattetime: '2017-9-2 12:22:12',
        desc: "患者发作3次"
      },
      {
        id: 3,
        dattetime: '2017-8-13 12:22:12',
        desc: "患者发作2次"
      },
      {
        id: 4,
        dattetime: '2017-8-12 12:22:12',
        desc: "患者发作9次"
      }, {
        id: 5,
        dattetime: '2017-7-12 12:22:12',
        desc: "患者发作5次"
      },
      {
        id: 6,
        dattetime: '2017-6-12 12:22:12',
        desc: "患者发作8次"
      }
    ]
  }
  componentDidMount () {
    console.log(this.props);
    this.init(1)

  }

  init (flag) {
    // 获取case数据，根据id
    Axios({
      url: Api.map.getCaseRecord,
      method: "get",
      params: { flag: flag }
    })
      .then((res) => {
        const data = res.data.data.dataList;
        // console.log(data);
        if (data.success) {
          this.setState({
            dataX: data.dataX,
            dataY: data.dataY,
            loaded: true
          })
        }

      })
      .finally((e) => {
        // console.log(e);
      })
  }
  /* 获取数据 */


  getOption = () => {

    const { dataX, dataY } = this.state
    const option = {
      title: {
        text: '发作次数'
      },
      tooltip: {
        // triggerOn: 'none',
        formatter: function (params) {
          return '日期: ' + params.name + '<br>次数: ' + params.value;
        }
      },
      xAxis: {
        type: 'category',
        data: this.state.dataX
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: this.state.dataY,
        type: 'line'
      }]

    }
    return option;
  }

  render () {

    const { data, isShowImgVisible } = this.state
    return (
      <div className={styles.onset}>
        <div className={styles.echarts}>
          {
            this.state.loaded && <ReactEcharts
              option={this.getOption()}
              style={{ height: '250px', width: '100%' }}
              className='react_for_echarts' />
          }
        </div>

        <ul>
          {
            data.length > 0 && data.map(item => {
              return (
                <li className={styles.content} key={item.id}>
                  <div>{item.dattetime}</div>
                  <div>{item.desc}</div>
                </li>
              )
            })
          }
        </ul>
      </div>

    )
  }
}
