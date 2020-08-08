import React, { PureComponent } from 'react'
import styles from './style.module.scss'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import RecordDetail from '../RecordDetail'
const tabs = [
  { title: '就诊记录', sub: '1' },
  { title: '发作记录', sub: '2' },
  { title: '不良反应', sub: '3' },
  { title: '病情日志', sub: '4' },
  { title: '药物治疗', sub: '5' },
];
export default class index extends PureComponent {
  state = {
    userInfo: {
      name: "张三",
      headUrl: require("assets/images/3.png"),
      sex: "男",
      age: "40",
      datetime: "2016-01-01(已关联20天)",
      grouping: "特殊病患"
    }
  }

  render () {
    const { userInfo } = this.state;
    console.log(userInfo);

    return (
      <div className={styles.mypatientdetail}>
        <p className={styles.title}>患者详情</p>
        <div className={styles.header}>
          <div className={styles["head-left"]}>
            <img src={userInfo.headUrl} className={styles["headimg"]} />
            <div className={styles["person-desc"]}>
              <p><span>{userInfo.name}&nbsp;&nbsp;</span>|<span>&nbsp;&nbsp;{userInfo.sex}&nbsp;&nbsp;</span>|<span>&nbsp;&nbsp;{userInfo.age}</span></p>
              <p><span>关联日期:&nbsp;{userInfo.datetime}</span></p>
              <p><span>分组:&nbsp;{userInfo.grouping}</span></p>
            </div>
          </div>
          <div>
            <a className={styles["search-info"]}>查看个人资料</a>
          </div>
        </div>
        <div className={styles.content}>
          <WhiteSpace />
          <StickyContainer>
            <Tabs tabs={tabs}
              initialPage={'1'}
            >
              <RecordDetail />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                Content of second tab
                </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                Content of third tab
                </div>
            </Tabs>
          </StickyContainer>
          <WhiteSpace />
        </div>
      </div>
    )
  }
}
