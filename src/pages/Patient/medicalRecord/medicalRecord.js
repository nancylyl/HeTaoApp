import React, { Component } from 'react'
import styles from './style.module.scss'
import { Carousel, Button, WhiteSpace, Card, Badge, List } from 'antd-mobile';
export default class index extends Component {

  render () {
    return (
      <div className={styles["big-box"]} >
        <div className={styles.topTitle}>病历本
        <a className={styles["a-jilu"]} href="" onClick={
            () => {
              this.props.history.push("/patient/recordLog/index")
            }
          }>就诊记录</a>
        </div>
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
            <WhiteSpace size="lg" />
            <Card full>
              <Card.Header title="症状变化" className={styles.activity} />
              <Card.Body className={styles["card-body"]}>
                <ul>
                  <li className={styles["content"]}>
                    <div >
                      <p className={styles.count}>2017-12-22 09:12:00   诊疗活动
                        <Badge text="8" hot style={{ marginLeft: 12 }} />
                      </p>
                      <p>地点:北京第一癫痫医院 </p>
                    </div>
                    <div className={styles["content-right"]}>
                      报名中
                   </div>
                  </li>
                  <li className={styles["content"]}>
                    <div >
                      <p className={styles.count}>2017-12-22 09:12:00   诊疗活动
                        <Badge text="8" hot style={{ marginLeft: 12 }} />
                      </p>
                      <p>地点:北京第一癫痫医院 </p>
                    </div>
                    <div className={styles["content-right"]}>
                      报名中
                   </div>
                  </li>
                  <li className={styles["content"]}>
                    <div >
                      <p className={styles.count}>2017-12-22 09:12:00   诊疗活动
                        <Badge text="8" hot style={{ marginLeft: 12 }} />
                      </p>
                      <p>地点:北京第一癫痫医院 </p>
                    </div>
                    <div className={styles["content-right"]}>
                      名额已满
                   </div>
                  </li>
                </ul>

              </Card.Body>

            </Card>
          </div>
        </div>
      </div>
    )
  }
}

