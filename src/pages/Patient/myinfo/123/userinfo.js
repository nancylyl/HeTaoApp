import React, { Component } from 'react'
import styles from './userinfo.module.scss'


export default class index extends Component {

  state = {
    disabled: false,
  }

  render () {
    return (
      <div className={styles["big-box"]} >
        <div className={styles.topTitle}>
          <a href="">我</a>
        </div>

        <div
          className={styles["header"]}>
          <img src={require('../../../../assets/images/3.png')} className={styles["doctor-head"]} />
        </div>

        <div className={styles["ul"]}>
          <ul className={styles["ul1"]}>
            <li onClick={
              () => {
                this.props.history.push("/patient/myinfo/123/Diseaselog")
              }
            } >
              <span className={styles["span1"]}>手机号</span> <span>18100000000</span>

            </li>
            <li onClick={
              () => {
                this.props.history.push("/patient/myinfo/123/mydoctor")
              }
            }>
              <span className={styles["span2"]}>昵称</span> <span>倒霉熊</span>
            </li>
            <li onClick={
              () => {
                this.props.history.push("/patient/myinfo/123/Diseaselog")
              }
            }> <span className={styles["span3"]}>微信绑定</span> <span>倒霉熊</span>
            </li>
          </ul>
        </div>

      </div>
    )
  }
}
