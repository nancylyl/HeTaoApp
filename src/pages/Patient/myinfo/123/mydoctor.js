import React, { Component } from 'react'
import styles from './mydoctor.module.scss'
import { SegmentedControl, WingBlank } from 'antd-mobile';

export default class mydoctor extends React.Component {
  onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }
  onValueChange = (value) => {
    console.log(value);
  }
  render () {
    return (
      <div className={styles["body"]}>
        <WingBlank size="lg" className={styles["header1"]}>
          <p className={styles["header_p"]}>我的医生</p>
          <SegmentedControl values={['全部', '我的关注']} />
        </WingBlank>
        <div className={styles["header"]}>
          <div  >
            <div className={styles["left"]}>
              <img src={require('../../../../assets/images/3.png')} className={styles["doctor-head"]} />
              <div className={styles["div0"]} >
                <div className={styles["div1"]}>倒霉熊</div>
                <div className={styles["div2"]}>主治医师</div>
              </div>
            </div>
            <div className={styles["div3"]}>
              <span>从医经验：主治癫痫10年</span>
              <span>所属医院：解放军第一附属医院</span>
            </div>


          </div>

        </div>
        <div className={styles["header"]}>
          <div  >
            <div className={styles["left"]}>
              <img src={require('../../../../assets/images/3.png')} className={styles["doctor-head"]} />
              <div className={styles["div0"]} >
                <div className={styles["div1"]}>倒霉熊</div>
                <div className={styles["div2"]}>主治医师</div>
              </div>
            </div>
            <div className={styles["div3"]}>
              <span>从医经验：主治癫痫10年</span>
              <span>所属医院：解放军第一附属医院</span>
            </div>


          </div>

        </div>
        <div className={styles["header"]}>
          <div  >
            <div className={styles["left"]}>
              <img src={require('../../../../assets/images/3.png')} className={styles["doctor-head"]} />
              <div className={styles["div0"]} >
                <div className={styles["div1"]}>倒霉熊</div>
                <div className={styles["div2"]}>主治医师</div>
              </div>
            </div>
            <div className={styles["div3"]}>
              <span>从医经验：主治癫痫10年</span>
              <span>所属医院：解放军第一附属医院</span>
            </div>


          </div>

        </div>

      </div>


    );
  }
}
