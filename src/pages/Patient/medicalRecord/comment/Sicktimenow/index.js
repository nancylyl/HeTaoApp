import React, { PureComponent } from 'react';
import { WingBlank, WhiteSpace, Button } from 'antd-mobile';
import styles from './style.module.scss';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react'
import Api from 'api'
import Axios from 'util/axios'

export default class index extends PureComponent {


  render () {

    return (
      <div>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>局灶性</WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>辅助检查</WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>发作频率</WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>药物治疗</WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>特殊治疗</WingBlank>
      </div> 
    )
  }
}
