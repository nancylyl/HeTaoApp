import React, { PureComponent } from 'react'
import styles from './recordlog.module.scss'
import { Checkbox, SearchBar, DatePicker, Flex, TextareaItem, Modal, InputItem, ImagePicker, List, Button, Toast, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import Api from '../../../api/index'
import Axios from '../../../util/axios'
import { Link } from 'react-router-dom';
import _ from 'lodash';
import MedicinesList from './Components/MedicinesList';
const CheckboxItem = Checkbox.CheckboxItem;
const AllMediaListData = require('./Components/MedicinesList/data.json');
class index extends PureComponent {
  state = {
    files: [],
    chooseList: [], // 选中的药物
    showMedicinesList: false,
    searchValue: "",
    recordData: ""
    // data: _.cloneDeep(olddata)
  };

  // onChange = (val) => {
  //   const { data } = this.state;
  //   let newData = [];
  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i].value == val) {
  //       data[i].isCheck = !data[i].isCheck
  //     }
  //     newData.push(data[i])
  //   }

  //   this.setState({
  //     data: newData
  //   })

  // }
  onSubmit = (() => {

    let recordlog = this.props.form.getFieldsValue()
    const { chooseList, recordData, files } = this.state
    let data = [];//药物
    chooseList.filter(item => {
      data.push(item.value)
    })
    console.log(recordlog);

    if (recordlog.hospitalName == undefined || recordlog.hospitalName.trim() == "") {
      Toast.info("请填写就诊医院");
      return;
    }
    if (recordlog.doctorName == undefined || recordlog.doctorName.trim() == "") {
      Toast.info("请填写就诊医生");
      return;
    }
    if (recordData == null || recordData == "") {
      Toast.info("请填写就诊日期");
      return;
    }
    Toast.info("保存成功");
    this.props.history.push("/Patient/home/index");

  })

  onChangeImge = (files, type, index) => {

    let newFiles = []
    if (files.length >= 9) {
      newFiles = files.map((item, index) => {
        if (index >= 9) {
          console.log(index);
          return files.splice(index, 1);
        }
      });
    } else {
      newFiles = files
    }

    this.setState({
      files,
    });

  }

  onMedicinesListVisible = (showMedicinesList) => {
    this.setState({
      showMedicinesList
    })
  }

  onMedicinesListOk = () => {
    const { chooseList } = this.state;
    console.log(chooseList)
    this.onMedicinesListVisible(false);
  }

  onChangeSelected = (chooseList) => {
    this.setState({
      chooseList
    })
  }


  render () {

    const { getFieldProps } = this.props.form;
    const { files, showMedicinesList, recordData, chooseList } = this.state
    return (
      <div>
        <p className={styles["nav-title"]}>就诊医院</p>
        <div className={styles.content}>
          <WhiteSpace size="lg" />
          <List >
            <InputItem
              {...getFieldProps('hospitalName')}
              placeholder="请输入就诊医院"
            ><i className={styles.red}>*</i>医院</InputItem>
          </List>
          <List >
            <InputItem
              {...getFieldProps('doctorName')}
              placeholder="请输入就诊医生"
            ><i className={styles.red}>*</i>就诊医生</InputItem>
          </List>
          <List >
            <DatePicker
              mode="date"
              title="就诊日期"
              extra="请选择就诊日期"
              value={recordData}
              onChange={recordData => this.setState({ recordData })}>
              <List.Item arrow="horizontal"><i className={styles.red}>*</i>就诊时间</List.Item>
            </DatePicker>
          </List>
          <List >
            <a onClick={() => {
              this.onMedicinesListVisible(true)
            }} >
              <List.Item arrow="horizontal" ><i className={styles.red}>&nbsp;</i>选择药物</List.Item>
            </a>
          </List>
          <List>
            {
              chooseList.length > 0 && AllMediaListData.filter(media => {
                return chooseList.find(choose => choose.value === media.value) ? true : false
              }).map((item, index) => {
                return (
                  <span key={index} className={styles["chooselable"]}>{item.label}</span>
                )

              })
            }

          </List>
          <TextareaItem
            {...getFieldProps('content')}
            defaultValue=""
            placeholder="请输入就诊内容"
            rows={6}
            count={500}
          />
          <ImagePicker
            files={files}
            onChange={this.onChangeImge}
            multiple
            selectable={files.length < 10}
          />
        </div>
        <div className={styles.btn}>
          <Button type="primary" onClick={this.onSubmit}>提交</Button>
        </div>
        <MedicinesList
          selected={chooseList}
          visible={showMedicinesList}
          onClose={this.onMedicinesListVisible}
          onChange={this.onChangeSelected}
          onOk={this.onMedicinesListOk}
        />
      </div >


    )
  }
}

const BasicInputExampleWrapper = createForm()(index);
export default BasicInputExampleWrapper;