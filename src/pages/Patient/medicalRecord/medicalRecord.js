import React, { Component } from 'react'
import styles from './style.module.scss'
import { Carousel, Button, WhiteSpace, Card, Badge, List,NavBar, Icon } from 'antd-mobile';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react'
import Api from 'api/index'
import Axios from 'util/axios'
export default class index extends Component {
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
        text: ''
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
      <div className={styles["big-box"]} >
        <NavBar className={styles["nav"]}
          mode="light"
          rightContent={[
            <a className={styles["a-jilu"]} href="" onClick={
              () => {
                this.props.history.push("/patient/recordLog/index")
              }}>记录就诊</a>
            ]}
          >病历本</NavBar>
        <NavBar
            mode="light"
            leftContent={[
              <span>病历资料</span>
            ]}
            rightContent={[
              <span  className={styles["rightspan"]}>信息未完善</span>
            ]}
          ></NavBar>
        <div className={styles["my-doctor"]}>
          <div className={styles["header"]}>
            <img src={require('../../../assets/images/3.png')} className={styles["doctor-head"]} />
            <span>倒霉熊</span>
            <div>
              <span>癫痫-一期患者</span>
            </div>
          </div>
          <div className={styles["header-profile"]}>
            <span>性别：男</span>
            <span>年龄：44岁</span>
            <span>城市：上海</span>
          </div>
          <div className={styles["header-profile"]}>
            确诊医院：北京癫痫医院
          </div>
          <div className={styles["header-profile"]}>
            确诊时间：2012.11.12
          </div>
          <div>
          <NavBar
            mode="light"
            rightContent={[
              <a className={styles["righta"]} onClick={() => {
                this.props.history.push(`/patient/medicalRecord/1`)
              }}>查看完整病历</a>
            ]}
          ></NavBar>
          <NavBar
            mode="light"
            leftContent={[
              <span>发作频次</span>
            ]}
          ></NavBar>
        <div className={styles.echarts}>
          {
            this.state.loaded && <ReactEcharts
              option={this.getOption()}
              style={{ height: '250px', width: '100%' }}
              className='react_for_echarts' />
          }
        </div>
          
          </div>
        </div>
      </div>
    )
  }
}

