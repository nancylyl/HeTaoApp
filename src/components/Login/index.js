import React, { PureComponent } from 'react';
import styles from './login.module.scss'
import { Button, List, Tabs, WingBlank, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

const tabs = [
  { title: "登录", sub: '1' },
  { title: "注册", sub: '2' },
];


class index extends PureComponent {

  handleClick = () => {
    this.inputRef.focus();
  }
  clickRegister = () => {
    let userInfo = this.props.form.getFieldsValue()
    userInfo.flag = this.props.flag
    console.log(userInfo);
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className={styles["login-box"]}>
        <Tabs tabs={tabs} initialPage={0} >
          <div className={styles["content-box"]}>
            <div className={styles.content}>
              <span className={['iconfont  icon-shouji']}></span>
              <InputItem
                {...getFieldProps('userName')}
                defaultValue=""
                placeholder="请输入您的手机号"
                ref={el => this.autoFocusInst = el}
                data-seed="logId"
              ></InputItem>
            </div>
            <div className={styles.content}>
              <span className={['iconfont icon-iconset0114']}></span>
              < InputItem
                defaultValue=""
                {...getFieldProps('userPassWord')}
                placeholder="请输入密码(6-16位)"
                data-seed="logId"
                type="password"
              ></InputItem>
            </div>
            <div className={styles.button}>
              <Button type="primary">注册</Button>
            </div>

          </div>
          <div className={styles["content-box"]}>
            <div className={styles.content}>
              <span className={['iconfont  icon-shouji']}></span>
              <InputItem
                defaultValue=""
                placeholder="请输入您的手机号"
                {...getFieldProps('userName')}
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
              <Button type="ghost" inline size="small" className={styles.code}>获取验证码</Button>

            </div>
            <div className={styles.content}>
              <span className={['iconfont icon-iconset0114']}></span>
              < InputItem
                defaultValue=""
                placeholder="请输入密码(6-16位)"
                {...getFieldProps('userPassWord')}
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

    );

  }
}
const BasicInputExampleWrapper = createForm()(index);

export default BasicInputExampleWrapper;