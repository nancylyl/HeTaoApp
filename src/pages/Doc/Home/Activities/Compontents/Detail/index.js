import React, { PureComponent } from 'react'
import { NavBar, Icon, Button, DatePicker, Modal, Toast, List, WhiteSpace, InputItem } from 'antd-mobile';
import styles from './style.module.scss'
import { createForm } from 'rc-form';
import SelectPatient from '../SelectPatient'
const allData = require('../SelectPatient/data.json');
const alert = Modal.alert;
@createForm()
export default class index extends PureComponent {

  state = {
    chooseList: [{
      "value": 6,
      "label": "李晓琪"
    },
    {
      "value": 7,
      "label": "周王茹"
    },
    {
      "value": 8,
      "label": "郝莹心"
    }],
    isShow: false,
    data: {
      datetime: "2018-11-12 14:00",
      address: "北京市东城区和平街门诊",
      count: 5
    }

  }

  render () {
    const { getFieldProps } = this.props.form;
    const { isShow, chooseList, data } = this.state
    return (
      <div className={styles.add}>
        <NavBar key="1" className={styles.nav}
          mode="light"
          icon={<Icon type="left"
            onClick={
              () => {
                this.props.history.push("/doc/activities");
              }
            } />}
        >诊疗活动详情</NavBar>

        <WhiteSpace size="lg" />
        <div className={styles.content}>
          <List className={styles.list} >
            <InputItem
              {...getFieldProps('datetime')}

              defaultValue={data.datetime}
              disabled={true}
            ><i className={styles.red}>*</i>诊疗时间</InputItem>
          </List>
          <List className={styles.list} >
            <InputItem
              {...getFieldProps('address')}
              defaultValue={data.address}
              disabled={true}
            ><i className={styles.red}>*</i>诊疗地点</InputItem>
          </List>
          <List className={styles.list} >
            <InputItem
              {...getFieldProps('count')}
              defaultValue={data.count}
              disabled={true}
              type="number"
            ><i className={styles.red}>*</i>诊疗人数</InputItem>
          </List>
          <List >
            <List.Item arrow="horizontal" ><i className={styles.red}>&nbsp;</i>提醒人群</List.Item>

          </List>
          <List>
            {
              chooseList.length > 0 && allData.filter(media => {
                return chooseList.find(choose => choose.value === media.value) ? true : false
              }).map((item, index) => {
                return (
                  <span key={index} className={styles["chooselable"]}>{item.label}</span>
                )
              })
            }

          </List>

        </div>

      </div>
    )
  }
}
