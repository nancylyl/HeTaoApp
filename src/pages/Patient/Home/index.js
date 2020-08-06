import React, { Component } from 'react'
import styles from './style.module.scss'
import { Carousel, Button, WhiteSpace, Card, Badge, List } from 'antd-mobile';

export default class index extends Component {

  render() {
    return (
      <div className={styles["big-box"]} >
        <div className={styles.topTitle}>核桃仁</div>
        <Carousel autoplay>
          <div className={styles.banner}>
            <h3 >1</h3>
          </div>
          <div className={styles.banner}>
            <h3>2</h3>
          </div>
          <div className={styles.banner}>
            <h3>3</h3>
          </div>
          <div className={styles.banner}>
            <h3 >4</h3>
          </div>
        </Carousel>
        <div className={styles.quick}>
          <Button icon={<i className={['iconfont  icon-zhaoxiangji']} />} className={styles.bottom}>拍照记录</Button>
          <Button icon={<i className={['iconfont icon-50']} />} className={styles.bottom}>纪录不良感受</Button>
        </div>
        <div className={styles.quick}>
          <Button icon={<i className={['iconfont  icon-shexiangji']} />} className={styles.bottom}>拍摄症状</Button>
          <Button icon={<i className={['iconfont icon-rizhi']} />} className={styles.bottom}>纪录不良感受</Button>
        </div>
        <h6 className={styles["title-mydoctor"]}>我的医生</h6>
        <div className={styles["my-doctor"]}>
          <div className={styles["header"]}>
            <img src={require('../../../assets/images/3.png')} className={styles["doctor-head"]} />
            <span>倒霉熊</span>
            <span>主任医生</span>
            <div>
              <span>关联时间:</span>
              <span>2017-12-8</span>
            </div>
          </div>
          <div className={styles["header-profile"]}>
            从医经验：主治癫痫10年
          </div>
          <div className={styles["header-profile"]}>
            所属医院：解放军第一附属医院
          </div>
          <div>
            <WhiteSpace size="lg" />
            <Card full>
              <Card.Header title="诊疗活动" className={styles.activity} />
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
