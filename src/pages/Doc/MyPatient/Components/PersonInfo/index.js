import React, { PureComponent } from 'react'
import styles from './style.module.scss'
import { Tabs, WhiteSpace, Progress } from 'antd-mobile';
import { StickyContainer } from 'react-sticky';
import PersonDetail from './PersonDetail'
var echarts = require('echarts');
//患者个人信息
const tabs = [
  { title: '基本信息', sub: '1' },
  // { title: '现病史', sub: '2' },
  // { title: '既往史', sub: '3' },
  // { title: '家族史', sub: '4' }
];
export default class index extends PureComponent {
  state = {
    uId: this.props.uId,
    userInfo: {
      name: "张三",
      headUrl: require("assets/images/3.png"),
      sex: "男",
      age: "40岁",
      birthday: "2000-09-09",
      phone: "15327827212",
      address: "河北省XX市",
      progress: 80
    }
  }

  render () {
    const { userInfo } = this.state;

    return (
      <div className={styles.peoson}>
        <p className={styles.title}>个人信息</p>
        <div className={styles.header}>
          <div className={styles["headimg"]}  >
            <img src={userInfo.headUrl} />
            <div className={styles["show-info"]}>
              <div className={styles.progress}><Progress percent={userInfo.progress} position="normal" /></div>
              <div aria-hidden="true">{userInfo.progress}%</div>
            </div>
          </div>
          <div className={styles.content}>
            <WhiteSpace />
            <StickyContainer>
              <Tabs tabs={tabs}
                initialPage={'1'}
              >
                <PersonDetail userInfo={userInfo} />

              </Tabs>
            </StickyContainer>
            <WhiteSpace />
          </div>
        </div>
      </div>
    )
  }
}
