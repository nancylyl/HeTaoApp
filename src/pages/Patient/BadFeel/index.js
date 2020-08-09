import React, { PureComponent } from 'react'
import styles from './badfeel.module.scss'
import { Checkbox, List, Button, Toast, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import Api from '../../../api/index'
import Axios from '../../../util/axios'

const CheckboxItem = Checkbox.CheckboxItem;

class index extends PureComponent {

  state = {
    files: [],
    data: [
      { value: 0, label: '烦躁易怒，容易生气,发怒，大人等', isCheck: false },
      { value: 1, label: '疲劳乏力(浑身没劲)', isCheck: false },
      { value: 2, label: '镇静嗜睡(犯困.总是想睡觉)', isCheck: false },
      { value: 3, label: '皮肤过敏(服药期初出现大量皮肤红斑，水泡，丘疹)', isCheck: false },
      { value: 4, label: '头昏眩晕', isCheck: false },
      { value: 5, label: '体重变化(近一个月体重明显增加或者减少)', isCheck: false },
      { value: 6, label: '恶心呕吐', isCheck: false },
      { value: 7, label: '其他不适', isCheck: false },
      { value: 8, label: '无不良感受', isCheck: false },
    ]
  };
  onChange = (val) => {
    const { data } = this.state
    let newData = [];
    for (let index = 0; index < data.length; index++) {
      if (val == 8) {
        if (index == val) {
          data[index].isCheck = !data[index].isCheck
        }
        else if (data[val].isCheck == false) {
          data[index].isCheck = false
        }
      }
      else {
        if (index == val) {
          data[index].isCheck = !data[index].isCheck
        }
        if (index == 8) {
          data[index].isCheck = false
        }
      }


      newData.push(data[index])
    }
    this.setState({
      data: newData
    })



  }
  onSubmit = (() => {
    const data = [];
    this.state.data.map(item => {
      if (item.isCheck) {
        data.push(item.value)
      }
    })
    console.log(data);

    Toast.info("记录成功");
    this.props.history.push("/Patient/home/index");

  })
  render() {

    const { getFieldProps } = this.props.form;
    const { data } = this.state
    return (
      <div>
        <p className={styles["nav-title"]}>不良感受</p>
        <WhiteSpace size="lg" />
        <List >
          {data.map(i => (
            <CheckboxItem key={i.value} checked={i.isCheck} onChange={() => this.onChange(i.value)}>
              {i.label}
            </CheckboxItem>
          ))}
        </List>
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <Button type="primary" onClick={this.onSubmit}>提交</Button>
      </div>
    )
  }
}

const BasicInputExampleWrapper = createForm()(index);
export default BasicInputExampleWrapper;