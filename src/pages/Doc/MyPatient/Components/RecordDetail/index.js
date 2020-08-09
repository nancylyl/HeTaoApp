import React, { PureComponent } from 'react'
import styles from './style.module.scss'
import { Card, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

export default class index extends PureComponent {
  state = {
    recordList: [
      {
        id: 1,
        count: "第10次就诊",
        datetime: "2017-11-10",
        week: "星期一",
        state: 2,
        stateName: "查看",
        address: "北京癫痫专业医院",
        self: "用户创建"
      },
      {
        id: 2,
        count: "第10次就诊",
        datetime: "2017-11-10",
        week: "星期一",
        state: 1,
        stateName: "查看",
        address: "北京癫痫专业医院",
        self: "用户创建"
      },
      {
        id: 3,
        count: "第10次就诊",
        datetime: "2017-11-10",
        week: "星期一",
        state: 2,
        stateName: "编辑",
        address: "北京癫痫专业医院",
        self: "用户创建"
      },
      {
        id: 4,
        count: "第10次就诊",
        datetime: "2017-11-10",
        week: "星期一",
        state: 1,
        stateName: "编辑",
        address: "北京癫痫专业医院",
        self: ""
      },
      {
        id: 5,
        count: "第10次就诊",
        datetime: "2017-11-10",
        week: "星期一",
        state: 2,
        stateName: "查看",
        address: "北京癫痫专业医院",
        self: "用户创建"
      },
      {
        id: 6,
        count: "第10次就诊",
        datetime: "2017-11-10",
        week: "星期一",
        state: 1,
        stateName: "查看",
        address: "北京癫痫专业医院",
        self: "用户创建"
      }
    ],
  }
  init () {
    const { recordList } = this.state
    return recordList.map((item) => {
      return (
        <li key={item.id} className={styles.li}>
          <div className={styles["row"]}>
            <div >
              <span className={styles.count}>{item.count}</span>
              <span className={styles.desc}>{item.datetime}</span>
              <span className={styles.desc}>{item.week}</span>
            </div>
            <div>
              <a className={styles.btnSee}>{item.stateName}</a>
            </div>
          </div>
          <div className={styles["row"]}>
            <div >

              <span className={styles.address}>{item.address}</span>
            </div>
            <div>
              <span className={styles.address}>{item.self}</span>
            </div>
          </div>
        </li>

      )
    })
  }
  render () {

    return (
      <div className={styles.recorddetial}>
        <Card.Body className={styles["card-body"]}>
          <ul>
            {this.init()}
          </ul>
        </Card.Body>
      </div>
    )
  }
}
