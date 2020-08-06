import React, { PureComponent } from 'react';
import styles from './login.module.scss'
import { Button, Tabs, Toast, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import Api from '../../api/index'
import Axios from '../../util/axios'
const tabs = [
  { title: "登录", sub: '1' },
  { title: "注册", sub: '2' },
];

class index extends PureComponent {
  state = {
    hasError: false,
    value: '',
  }


  clickRegister = () => {
    // let userInfo = this.props.form.getFieldsValue()
    // const { rphoneNubmer, rpassword, code } = userInfo

    // //#region 注册验证
    // if (rphoneNubmer == undefined) {
    //   Toast.info("请输入您的手机号码");
    //   return
    // }
    // if (!(/^1[3456789]\d{9}$/.test(rphoneNubmer))) {
    //   Toast.info("请输入正确的手机号码");
    //   return
    // }
    // if (rpassword.length < 6 || rpassword.length > 16) {
    //   Toast.info("密码必须是6-16位");
    //   return
    // }
    // if (code == undefined) {
    //   Toast.info("请输入验证码");
    //   return
    // }
    // //#endregion
    // userInfo = [{ "phoneNubmer": rphoneNubmer, "password": rpassword }];
    // this.postUser(userInfo)

  }
  clickLogin = () => {
    let userInfo = this.props.form.getFieldsValue()
    const { phoneNubmer, password } = userInfo
    //#region 登录验证
    if (phoneNubmer == undefined) {
      Toast.info("请输入您的手机号码");
      return
    }
    //  if (!(/^1[3456789]\d{9}$/.test(phoneNubmer))) {
    //   Toast.info("请输入正确的手机号码");
    //   return
    // }
    if (password.length < 6 || password.length > 16) {
      Toast.info("密码必须是6-16位");
      return
    }
    //#endregion
    userInfo = [{ "phoneNubmer": phoneNubmer, "password": password }];
    this.postUser(userInfo)
  }
  postUser(userInfo) {
    let url = "";
    let goUrl = ""
    const flag = this.props.flag
    if (flag == 1) {
      url = Api.patients.Login
      goUrl = "/Patient"
    }
    Axios({
      url: url,
      method: 'POST',
      isDev: 1,
      data: {
        userInfo
      }
    })
      .then((res) => {
        console.log(res)
        Toast.info("添加成功！");
        window.location.href = "/Patient/home/index"

      })
      .finally(() => {
      })
  }
  getCode = (() => {
    let userInfo = this.props.form.getFieldsValue()
    const { rphoneNubmer } = userInfo

  })

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className={styles.bg}>
        <div className={styles["login-box"]}>
          <Tabs tabs={tabs} initialPage={0} >
            <div className={styles["content-box"]}>
              <div className={styles.content}>
                <span className={['iconfont  icon-shouji']}></span>
                <InputItem
                  {...getFieldProps('phoneNubmer')}
                  defaultValue=""
                  placeholder="请输入您的手机号"
                  data-seed="logId"
                ></InputItem>
              </div>
              <div className={styles.content}>
                <span className={['iconfont icon-iconset0114']}></span>
                < InputItem
                  defaultValue=""
                  {...getFieldProps('password')}
                  placeholder="请输入密码(6-16位)"
                  data-seed="logId"
                  type="password"
                ></InputItem>
              </div>
              <div className={styles.button}>
                <Button type="primary" onClick={this.clickLogin}>登录</Button>
              </div>

            </div>
            <div className={styles["content-box"]}>
              <div className={styles.content}>
                <span className={['iconfont  icon-shouji']}></span>
                <InputItem
                  defaultValue=""
                  placeholder="请输入您的手机号"
                  {...getFieldProps('rphoneNubmer')}
                  data-seed="logId"
                ></InputItem>
              </div>
              <div className={styles.content}>
                <span className={['iconfont icon-icon_anquan']}></span>
                < InputItem style={{ width: "140px" }}
                  defaultValue=""
                  placeholder="请输入验证码"
                  {...getFieldProps('userCode')}
                  data-seed="logId"
                ></InputItem>
                <Button type="ghost" inline size="small" onClick={this.getCode} className={styles.code}>获取验证码</Button>

              </div>
              <div className={styles.content}>
                <span className={['iconfont icon-iconset0114']}></span>
                < InputItem
                  defaultValue=""
                  placeholder="请输入密码(6-16位)"
                  {...getFieldProps('rpassword')}
                  data-seed="logId"
                  type="password"
                ></InputItem>
              </div>
              <div className={styles.button}>
                <Button type="primary" onClick={this.clickRegister}>注册</Button>
              </div>

            </div>

          </Tabs>
        </div>
      </div>
    );

  }
}
const BasicInputExampleWrapper = createForm()(index);

export default BasicInputExampleWrapper;