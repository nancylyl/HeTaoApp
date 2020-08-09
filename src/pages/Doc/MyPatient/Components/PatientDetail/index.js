import React, { PureComponent } from 'react'
import styles from './style.module.scss'
import { Tabs, WhiteSpace, Icon } from 'antd-mobile';
import { StickyContainer } from 'react-sticky';
import { Link } from 'react-router-dom';
import RecordDetail from './RecordDetail'
import OnsetDetail from './OnsetDetail'//发作记录AdverseDetail 
import AdverseDetail from './AdverseDetail'//不良反应
import LogDetail from './LogDetail'//病情日志
import MedicineDetail from './MedicineDetail'//药物治疗
import echarts from 'echarts';
const tabs = [
  { title: '就诊记录', sub: '1' },
  { title: '发作记录', sub: '2' },
  { title: '不良反应', sub: '3' },
  { title: '病情日志', sub: '4' },
  { title: '药物治疗', sub: '5' },
];
export default class index extends PureComponent {
  state = {
    uId: 1,///doc/home/mypatientpersoninfo"
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
    const { userInfo, uId } = this.state;

    return (
      <div className={styles.mypatientdetail}>
        <div className={styles.nav}>
          <Icon
            onClick={() => {
              this.props.history.push(`/doc/mypatient/components/patientlist/${uId}`)
            }}
            className={styles.back}
            type="left"
          />
          <p className={styles.title}>患者详情</p>
        </div>

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
            <Link className={styles["search-info"]} to={`/doc/home/mypatientpesoninfo/${uId}`} >查看个人资料</Link>
          </div>
        </div>
        <div className={styles.content}>
          <WhiteSpace />
          <StickyContainer>
            <Tabs tabs={tabs}
              initialPage={'1'}
            >
              <RecordDetail uId={uId} />
              <OnsetDetail uId={uId} />
              <AdverseDetail uId={uId} />
              <LogDetail uId={uId} />
              <MedicineDetail uId={uId} />
            </Tabs>
          </StickyContainer>
          <WhiteSpace />
        </div>
      </div>
    )
  }
}
