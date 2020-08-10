import React, { PureComponent } from 'react';
import styles from './style.module.scss';
import Api from 'api/index'
import Axios from 'util/axios'

//不良反应
export default class index extends PureComponent {

  
  render () {


    return (
      <div>
        <p>是否有药物过敏史</p>
        <p>过敏药物名称</p>
        <p>是否有外伤史</p>
        <p>慢病史</p>
        <p>慢病史名称</p>
        <p>窒息史</p>
        <p>产伤</p>
        <p>感染</p>
        <p>高热惊厥史</p>
        <p>出血</p>
      </div>

    )
  }
}
