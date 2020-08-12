import React, { PureComponent } from 'react'
import _ from 'lodash';
import styles from './start.module.scss'
import { Tabs, Checkbox, InputItem, Button, Flex, Toast } from 'antd-mobile';
import Drawer from 'components/Drawer';
import Axios from 'util/axios'
import Api from 'api/index'

export default class ChooseDoc extends PureComponent {
  constructor(props) {
      super(props);
      this.state = { 
          tabs : [],
          loaded: false,
          checkedData:[],
          telList:[],
          value: '',
          telLoad: false,
      }
  }
  // 调接口获得医生数据
  init() {
    Axios({
      url: Api.discuss.getChooseDoc
    })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          this.setState({
            tabs: res.data.data,
            loaded: true
          })
          let tabs = _.cloneDeep(this.state.tabs);
          tabs.push({
            title: '手机号搜索',
            key: 'phone'
          })
          this.setState({
            tabs: tabs,
          },()=>{
            console.log(this.state.tabs);
          });
        } else {
        }
      })
  }
  componentDidMount() {
      this.init();     
    }
  renderContent = tab =>(
      <div style={{ display: 'flex',width: "100%", justifyContent: 'space-between',  }}>
          {this.renderRow(tab.key)}
      </div>
  )  
  renderRow=(index)=>{
      if (index=='phone') {
      return <div className={styles.telBox}>
        <Flex>
          <InputItem
            type="phone"
            placeholder="请输入手机号码"
            onChange={this.telChange}
          ></InputItem>
          <Button onClick={this.toAddTel}>添加</Button>
        </Flex>
        <div className={styles.telBox1}>
          {this.searchPhone()}
        </div>
        </div>
      }
      else{
        return <div className={styles.listBox}>{this.getDocList(Number(index))}</div>
      }
  }
  // 根据电话号码选择医生
  searchPhone = () => {
    const { telList } = this.state
    let lists = telList.map((item,index)=>{
      return <div key={index} className={styles.tel}>
            {item}&nbsp;&nbsp;&nbsp;&nbsp;
            <span onClick={this.delTel.bind(this,item)}>X</span>
        </div>
    })
    return lists
  }
  telChange = (value) => {
    this.setState({
      value,  
    });    
  }
  toAddTel = () => {
    const { value, checkedData, telList } = this.state
    let tel = _.cloneDeep(telList);
    let obj = _.cloneDeep(checkedData);
    if (value.replace(/\s/g, '').length < 11) {
      Toast.info('请输入11位手机号码',0.7);
    } else {
      var telStr = tel.toString()
      console.log(telStr.indexOf(value));
      if (telStr.indexOf(value) < 0) {
        Toast.info('添加成功',0.7);
        tel.push(value)
        obj.push(value)
      }else{
        Toast.info('该电话已存在',0.7);
      }
    }
    this.setState({
      checkedData: obj,
      telList: tel,
      telLoad: true,
    })
    this.init();
  }
  delTel = (val) => {
    const { checkedData, telList } = this.state
    let tel = _.cloneDeep(telList);
    let obj = _.cloneDeep(checkedData);
    obj = obj.filter(i => i !== val);
    tel = tel.filter(i => i !== val);
    this.setState({
      checkedData: obj,
      telList: tel,
    })
    this.init();
  }
  // 从医生列表选择医生
  getDocList = (key) => {
      const {tabs,checkedData} = this.state
      // console.log(key);
      let lists = tabs[key-1].children.map((item,index)=>{
          return <div key={index} className={styles.list}>
                  <span className={styles.left}>{item.title}</span>
                  <Checkbox  
                  defaultChecked={checkedData.find(i => i == item.title) ? true : false}
                  onChange={(e) => this.onChange(item.title, e.target.checked)}
                  >
                  </Checkbox>
              </div>
          })
      return lists
  }
  onChange = (val,checked) => {
    let { checkedData } = this.state;
    let obj = _.cloneDeep(checkedData);
    if (checked) {
      obj.push(val);
    } else {
      obj = obj.filter(i => i !== val);
    }
    this.setState({
      checkedData: obj
    })
  }
  onClose = () => {
    this.props.onClose(false)
    this.setState({
      checkedData: [],
      telList:[]
    },function(){
      this.props.onOk(this.state.checkedData)
    })
    
  }
  onOk = () => {
    this.props.onOk(this.state.checkedData)
  }
  
  render() {      
    const { visible } = this.props  
      return (
        <Drawer
          visible= {visible}
          title='选择医生'
          onClose={this.onClose}
          onOk={this.onOk}
          okText = '完成'
        >
          <div className={styles.chooseBox}>
            <form>
              {this.state.loaded&&<Tabs tabs={this.state.tabs}
                initialPage={'1'}
                tabBarPosition="left"
                >
                  {this.renderContent}  
                </Tabs>}
              </form> 
          </div>   
        </Drawer>
      )
  }
}
