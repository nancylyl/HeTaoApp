import React, { Component } from 'react'
import styles from './style.module.scss'


export default class index extends Component {
 
  state = {
    disabled: false,
  }
  
  render() {
    return (
      <div className={styles["big-box"]} >
           <div className={styles.topTitle}>
              <a  href="" onClick={
                  () => {
                    this.props.history.push("/patient/myinfo/123/userinfo")
                  }
                }>我</a>
            </div>

            <div  onClick={
                  () => {
                    this.props.history.push("/patient/myinfo/123/userinfo")
                  }
                }
            className={styles["header"]}>
            <img src={require('../../../assets/images/3.png')} className={styles["doctor-head"]} />
            <span>倒霉熊</span>
          </div>

          <div className={styles["ul"]}>

            <ul className={styles["ul1"]}>

              <li onClick={
                  () => {
                    this.props.history.push("/patient/myinfo/123/Diseaselog")
                  }
                } >
              <span className={styles["span1"]}>病情日志</span> <span>></span>
                 
                </li>

              <li  onClick={
                  () => {
                    this.props.history.push("/patient/myinfo/123/userinfo")
                  }
                }>
              <span className={styles["span1"]}>账户信息</span> <span>></span>
              </li>

              <li  onClick={
                  () => {
                    this.props.history.push("/patient/myinfo/123/mydoctor")
                  }
                }> <span className={styles["span1"]}>我的医生</span> <span>></span> 
              </li>


            </ul>
            <ul className={styles["ul2"]}>
              <li  onClick={
                  () => {
                    this.props.history.push("/patient/myinfo/123/Diseaselog")
                  }
                }> <span className={styles["span2"]}>设置</span> <span>></span>
                 
              </li>
            </ul>
          </div>

      </div>
    )
  }
}
