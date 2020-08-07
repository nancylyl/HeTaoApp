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
let siv;
class index extends PureComponent {
  state = {
    loading: false,
    yztime: 59,
    isClick: true
  }


  clickRegister = () => {
    let userInfo = this.props.form.getFieldsValue()
    const { rphoneNubmer, rpassword, userCode } = userInfo
    //#region 注册验证
    if (rphoneNubmer == undefined) {
      Toast.info("请输入您的手机号码");
      return
    }
    if (!(/^1[3456789]\d{9}$/.test(rphoneNubmer))) {
      Toast.info("请输入正确的手机号码");
      return
    }
    if (rpassword.length < 6 || rpassword.length > 16) {
      Toast.info("密码必须是6-16位");
      return
    }
    if (userCode == undefined) {
      Toast.info("请输入验证码");
      return
    }
    this.setState(
      {
        loading: false,
        yztime: 59
      });
    clearInterval(siv);
    //#endregion
    userInfo = [{ "phoneNubmer": rphoneNubmer, "password": rpassword, "userCode": userCode }];
    this.postUser(userInfo)

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
    const { isClick } = this.state
    if (isClick) {   //如果为true 开始执行
      this.setState({ isClick: false })   //将isClick 变成false，将不会执行处理事件
      const that = this   // 为定时器中的setState绑定this
      setTimeout(function () {       // 设置延迟事件，1秒后将执行
        that.setState({ isClick: true })   // 将isClick设置为true
      }, 5000);

    }
    if (isClick) {
      let url = "";
      let goUrl = ""
      const flag = this.props.flag
      if (flag == 1) {
        url = Api.patients.Login
        goUrl = "/Patient"
      }
      console.log(userInfo)
      Axios({
        url: Api.patients.login,
        method: 'POST',
        // isDev: 1,
        data: { userInfo }

      })
        .then((res) => {
          console.log(res)
          Toast.info("添加成功！");
          // window.location.href = "/Patient/home/index"

        })
        .finally(() => {
        })
    } else {
      Toast.info("请不要频繁操作！");
    }
  }
  /* 验证短信 */
  getCode = (() => {
    let userInfo = this.props.form.getFieldsValue()
    const { rphoneNubmer } = userInfo

    // if (rphoneNubmer == undefined) {
    //   Toast.info("请输入您的手机号码");
    //   return
    // }
    // if (!(/^1[3456789]\d{9}$/.test(rphoneNubmer))) {
    //   Toast.info("请输入正确的手机号码");
    //   return
    // }
    this.setState({ loading: true });

    this.props.form.validateFields((err, values) => {
      if (!this.state.yztime == 0) {
        this.count();
      }

    });
    Axios({
      url: Api.patients.getCode,
      isDev: 1,
      params: {
        phoneNubmer: rphoneNubmer
      }
    })
      .then((res) => {
        console.log(res)

      })
      .finally(() => {
      })
  })

  count = () => {
    let { yztime } = this.state;
    console.log(yztime);

    siv = setInterval(() => {
      this.setState({ yztime: (yztime--) }, () => {
        if (yztime <= -1) {
          clearInterval(siv);　　//倒计时( setInterval() 函数会每秒执行一次函数)，用 clearInterval() 来停止执行:
          this.setState({ loading: false, yztime: 59 })
        }
      });
    }, 1000);
  }

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
                <Button type="ghost" disabled={this.state.loading} loading={this.state.loading} inline size="small" onClick={this.getCode} className={styles.code}>

                  {this.state.loading ? this.state.yztime + '秒' : '发送验证'}
                </Button>

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