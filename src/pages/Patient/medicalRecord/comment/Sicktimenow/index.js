import React, { PureComponent } from 'react';
import { List, WhiteSpace, Button } from 'antd-mobile';
import styles from './style.module.scss';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react'
import Api from 'api'
import Axios from 'util/axios'

export default class index extends PureComponent {


  render () {

    return (
      <div>
        <p>局灶性</p>
        <p>辅助检查</p>
        <p>发作频率</p>
        <p>药物治疗</p>
        <p>特殊治疗</p>
      </div> 
    )
  }
}
