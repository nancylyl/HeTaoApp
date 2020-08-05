import React, { PureComponent } from 'react'
import { Tabs, WhiteSpace, TabBar } from 'antd-mobile';
import styles from '../style.module.scss';

export default class index extends PureComponent {
  render() {
    return (
      < >
        <div className={styles.content}>
          我是内容医生
      </div>
        <footer className={styles.footer}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            tabBarPosition="bottom"
          >
            <TabBar.Item
              title="首页"
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
              title="患者"
              key="2"
              onPress={() => { this.renderContent(2) }}
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

      </>

    )
  }
}
