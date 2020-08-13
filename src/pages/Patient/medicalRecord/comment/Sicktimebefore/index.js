import React, { PureComponent } from 'react';
import { WingBlank,WhiteSpace, Card } from 'antd-mobile';
import styles from './style.module.scss';
import Api from 'api/index'
import Axios from 'util/axios'

//不良反应
export default class index extends PureComponent {

  
  render () {


    return (
      <div>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>是否有药物过敏史</WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>过敏药物名称</WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>是否有外伤史</WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>慢病史</WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>慢病史名称</WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>窒息史</WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>产伤</WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>感染</WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>高热惊厥史</WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className={styles.placeholder}>出血</WingBlank>
      </div>

    )
  }
}
