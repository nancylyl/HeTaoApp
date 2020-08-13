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
      { value: 1, label: '烦躁易怒，容易生气,发怒，大人等', isCheck: false },
      { value: 2, label: '疲劳乏力(浑身没劲)', isCheck: false },
      { value: 3, label: '镇静嗜睡(犯困.总是想睡觉)', isCheck: false },
      { value: 4, label: '皮肤过敏(服药期初出现大量皮肤红斑，水泡，丘疹)', isCheck: false },
      { value: 5, label: '头昏眩晕', isCheck: false },
      { value: 6, label: '体重变化(近一个月体重明显增加或者减少)', isCheck: false },
      { value: 7, label: '恶心呕吐', isCheck: false },
      { value: 8, label: '其他不适', isCheck: false },
      { value: 9, label: '无不良感受', isCheck: false },
    ],
    badType: [],
    loaded: false
  };
  onChange = (val) => {
    const { data, badType } = this.state

    let index = badType.indexOf(val);
    if (index > -1) {
      badType.splice(index, 1)
    }
    else {
      badType.push(val);
    }

    this.setState({
      badType: badType
    })



  }
  onSubmit = (() => {
    const data = [];

    Axios({
      isDev: 1,
      url: "/patient/addBadType?P_ID=1&list=" + this.state.badType,
    })
      .then((res) => {
        console.log(res);

      })
      .finally(() => {
      })

    Toast.info("记录成功");
    this.props.history.push("/Patient/home/index");

  })
  componentWillMount () {
    this.init();
  }

  init () {

    //不良反应
    this.getcheckBadType()
  }
  getcheckBadType () {
    Axios({
      isDev: 1,
      url: "/patient/checkBadType?P_ID=1",
    })
      .then((res) => {
        console.log(res);

        if (res.data.code == "0") {

          this.setState({
            badType: res.data.badType == null ? [] : res.data.badType,
            loaded: true
          })
          console.log(this.state.badType);

        }
      })
      .finally(() => {
      })

  }
  render () {

    const { getFieldProps } = this.props.form;
    const { data, badType, loaded } = this.state
    console.log("333");

    console.log(badType);

    return (
      <div>

        <p className={styles["nav-title"]}>不良感受</p>
        <WhiteSpace size="lg" />
        <List >
          {loaded && data.map(i => (
            <CheckboxItem key={i.value}
              defaultChecked={badType.indexOf(i.value) > -1 ? true : false}
              onChange={() => this.onChange(i.value)}
            >

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