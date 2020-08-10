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
    chooseList: [],
    isShow: false

  }
  onSubmit = () => {
    let data = this.props.form.getFieldsValue()
    console.log(data);
    Toast.info("添加成功");
    this.props.history.push("/doc/activities")
  }
  onIsOpen = (isShow) => {
    this.setState({
      isShow
    })
  }
  onChooseList = (chooseList) => {
    console.log(chooseList);

    this.setState({
      chooseList
    })
  }
  onChooseOK = () => {
    this.onIsOpen(false);
  }
  render () {
    const { getFieldProps } = this.props.form;
    const { isShow, chooseList } = this.state
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
        >诊疗活动</NavBar>

        <WhiteSpace size="lg" />
        <div className={styles.content}>
          <List className={styles.list} >
            <DatePicker
              {...getFieldProps('datetime')}
            >
              <List.Item arrow="horizontal"><i className={styles.red}>*</i>诊疗时间</List.Item>
            </DatePicker>
          </List>
          <List className={styles.list} >
            <InputItem
              {...getFieldProps('address')}
              placeholder="请输入诊疗地点"
            ><i className={styles.red}>*</i>诊疗地点</InputItem>
          </List>
          <List className={styles.list} >
            <InputItem
              {...getFieldProps('count')}
              placeholder="请输入诊疗人数"
              type="number"
            ><i className={styles.red}>*</i>诊疗人数</InputItem>
          </List>
          <List >
            <a onClick={() => {
              this.onIsOpen(true)
            }} >
              <List.Item arrow="horizontal" ><i className={styles.red}>&nbsp;</i>提醒人群</List.Item>
            </a>
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
          <div className={styles.btn}>
            <Button type="primary" onClick={this.onSubmit}>提交</Button>
          </div>
        </div>
        <SelectPatient
          selected={chooseList}
          visible={isShow}
          onClose={this.onIsOpen}
          onChange={this.onChooseList}
          onOk={this.onChooseOK}
        />
      </div>
    )
  }
}
