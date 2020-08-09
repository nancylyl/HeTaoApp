import React, { PureComponent } from 'react';
import styles from './style.module.scss';

import Api from 'api'
import Axios from 'util/axios'

//不良反应
export default class index extends PureComponent {
  state = {
    // uId: this.props.uId,
    userInfo: this.props.userInfo
  }


  render () {

    const { userInfo } = this.state
    return (
      <div className={styles.peosondetail}>

        <ul>
          <li >
            <div>姓名</div>
            <div>{userInfo.name}</div>
          </li>
          <li>
            <div>性别</div>
            <div>{userInfo.sex}</div>
          </li>
          <li>
            <div>出生年月</div>
            <div>{userInfo.birthday}</div>
          </li>
          <li>
            <div>发病年龄</div>
            <div>{userInfo.age}</div>
          </li>
          <li>
            <div>手机号码</div>
            <div>{userInfo.phone}</div>
          </li>
          <li>
            <div>现居住地</div>
            <div>{userInfo.address}</div>
          </li>
        </ul>
      </div>

    )
  }
}
