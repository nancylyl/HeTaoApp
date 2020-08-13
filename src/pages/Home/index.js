import React, { PureComponent } from 'react'
import { Tabs, WhiteSpace, TabBar } from 'antd-mobile';
import styles from '../../style.module.scss';
const tabs = [
  { title: '用户端', key: 1 },
  { title: '医生端', key: 2 }
];

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fullScreen: false,
    };
  }

  renderContent = ((index) => {
    if (index == 2) {
      this.props.history.push('/doc')
    } else {
      this.props.history.push('/patient')
    }

  })
  render () {
    return (
      <div >
        <div className={styles.content}>
          我是内容
        </div>
        <footer className={styles.footer}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            tabBarPosition="bottom"
          >
            <TabBar.Item
              title="用户端"
              key="1"
              onPress={() => { this.renderContent(1) }}
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
              }}

              />
              }

              data-seed="logId"
            >
            </TabBar.Item>
            <TabBar.Item
              title="医生端"
              key="2"
              onPress={() => { this.renderContent(2) }} no-repeat
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
              }}

              />
              }

              data-seed="logId"
            >
            </TabBar.Item>
          </TabBar>

        </footer >

      </div>

    )
  }
}
