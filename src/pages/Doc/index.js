import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { Tabs, WhiteSpace, TabBar } from 'antd-mobile';
import { Link } from 'react-router-dom'
import styles from '../../style.module.scss';

export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
    }
  }
  onPress = (index => {
    console.log(index);
    this.setState({
      selectedTab: index
    })
    //  if (index==1) {
    //   this.props.history.push('/doc')
    //  }else if (index==2) {
    //   this.props.history.push('/doc/patient')
    //  }else if (index==3) {
    //   this.props.history.push('/doc/news')
    //  }else{
    //   this.props.history.push('/doc/myInfo/index')
    //  }

  })
  render() {
    return (
      < >
        <div className={styles.content}>
          {this.props.children}
        </div>
        <footer className={styles.footer} >
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            tabBarPosition="top"
          >
            <TabBar.Item
              title="首页"
              key="1"
              icon={<div className={styles.tabBarItem} ><i className={['iconfont icon-shouye']}></i></div>}
              selectedIcon={<div className={styles.tabBarItemSelet} ><i className={['iconfont  icon-shouye']}></i></div>}
              selected={this.state.selectedTab === 1}
              onPress={() => { this.onPress(1); }}>
            </TabBar.Item>
            <TabBar.Item
              icon={<div className={styles.tabBarItem} ><i className={['iconfont icon-huanzhehebing']}></i></div>}
              selectedIcon={<div className={styles.tabBarItemSelet} ><i className={['iconfont  icon-huanzhehebing']}></i></div>}
              title="患者"
              key="2"

              selected={this.state.selectedTab === 2}
              onPress={() => { this.onPress(2); }}>

            </TabBar.Item>
            <TabBar.Item
              icon={<div className={styles.tabBarItem} ><i className={['iconfont icon-dkw_xiaoxi']}></i></div>}
              selectedIcon={<div className={styles.tabBarItemSelet} ><i className={['iconfont icon-dkw_xiaoxi']}></i></div>}
              title="消息"
              dot
              key="3"
              selected={this.state.selectedTab === 3}
              onPress={() => { this.onPress(3); }}>
            </TabBar.Item>
            <TabBar.Item
              icon={<div className={styles.tabBarItem} ><i className={['iconfont icon-daohanglan-05']}></i></div>}
              selectedIcon={<div className={styles.tabBarItemSelet} ><i className={['iconfont icon-daohanglan-05']}></i></div>}
              title="我的"
              key="4"
              selected={this.state.selectedTab === 4}
              onPress={() => { this.onPress(4); }}>
            </TabBar.Item>
          </TabBar>

        </footer >

      </>

    )
  }
}
