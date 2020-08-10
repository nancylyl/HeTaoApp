import React, { PureComponent } from 'react'
import styles from './style.module.scss'
import { Tabs, WhiteSpace, Icon } from 'antd-mobile';
import { StickyContainer } from 'react-sticky';
import { Link } from 'react-router-dom';
import RecordDetail from './RecordDetail'
import Sicktimenow from './Sicktimenow'//现病史 
import Sicktimebefore from './Sicktimebefore'//既往病史
import Sicktimefamily from './Sicktimefamily'//家族病史
import echarts from 'echarts';
const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码
const tabs = [
  { title: '就诊记录', sub: '1' },
  { title: '现病史', sub: '2' },
  { title: '既往病史', sub: '3' },
  { title: '家族病史', sub: '4' },
];
export default class index extends PureComponent {
  state = {
    uId: 1,
    userInfo: {
      name: "倒霉熊",
      headUrl: require("assets/images/3.png"),
      sex: "男",
      age: "35",
      hospital: "北京癫痫医院",
      diseasedata: "15岁"
    }
  }
goback=()=>{
        history.goBack();
    }
  render () {
    const { userInfo, uId } = this.state;

    return (
      <div className={styles.mypatientdetail}>
        <div className={styles.nav}>
          <Icon
            onClick={this.goback}
            className={styles.back}
            type="left"
          />
          <p className={styles.title}>完整病历</p>
        </div>
        <div className={styles.header}>
          <div className={styles["head-left"]}>
            <img src={userInfo.headUrl} className={styles["headimg"]} />
            <div className={styles["person-desc"]}>
              <p><span>{userInfo.name}&nbsp;&nbsp;</span>|<span>&nbsp;&nbsp;{userInfo.sex}&nbsp;&nbsp;</span>|<span>&nbsp;&nbsp;{userInfo.age}</span></p>
              <p><span>确诊医院:&nbsp;{userInfo.hospital}</span></p>
              <p><span>病龄:&nbsp;{userInfo.diseasedata}</span></p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <WhiteSpace />
          <StickyContainer>
            <Tabs tabs={tabs}
              initialPage={'1'}
            >
              <RecordDetail uId={uId} />
              <Sicktimenow uId={uId} />
              <Sicktimebefore uId={uId} />
              <Sicktimefamily uId={uId} />
            </Tabs>
          </StickyContainer>
          <WhiteSpace />
        </div>
      </div>
    )
  }
}
