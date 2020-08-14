import React, { Component } from 'react'
import { Badge, Icon, NavBar, Tabs, WingBlank } from "antd-mobile";
import '../../Patient/News/news.scss'
import './MyInfo.scss'
export default class index extends Component {
  render () {
    return (
      <div>
        <NavBar key={1}
          mode="light"
          rightContent={[
            <span key={1}>二维码</span>
          ]}
        >我的
                </NavBar>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', height: 'auto', backgroundColor: '#fff' }}>

          <div className='Box'>
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3292949583,636505648&fm=26&gp=0.jpg" alt="" />
            <p>小明</p>
          </div>
          <div className='Box-d'>
            <div>
              <p>所有患者</p>
              <p>102</p>
            </div>
            <div>
              <p>本周新增患者</p>
              <p>22</p>
            </div>
            <div>
              <p>我的核桃</p>
              <p>29</p>
            </div>
          </div>
          <WingBlank>
            <div className='box' onClick={() => {
              this.props.history.push("/doc/MyInfo/AccountInf")
            }}>
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3292949583,636505648&fm=26&gp=0.jpg" alt="" />
              <p>账户信息</p>
              <div>
                <Icon type='right' size='lg' color='#e4e4e4'></Icon>
              </div>
            </div>
          </WingBlank>

          <WingBlank>
            <div className='box'>
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3292949583,636505648&fm=26&gp=0.jpg" alt="" />
              <p>设置</p>
              <div>
                <Icon type='right' size='lg' color='#e4e4e4'></Icon>
              </div>
            </div>
          </WingBlank>

          <WingBlank>
            <div className='box'>
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3292949583,636505648&fm=26&gp=0.jpg" alt="" />
              <p>关于我们</p>
              <div>
                <Icon type='right' size='lg' color='#e4e4e4'></Icon>
              </div>
            </div>
          </WingBlank>

        </div>
      </div>
    )
  }
}
