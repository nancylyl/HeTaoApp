import React, { Component } from 'react'
import styles from './start.module.scss'
import {  Icon, Tabs, Checkbox } from 'antd-mobile';
import { createForm } from 'rc-form';
const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码
let  obj=[];

class ChooseDoc extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tabs :  [
                {
                  title: '北京癫痫病医院',
                  value: '1',
                  key: '1',
                  children: [
                    {
                      title: '林明',
                      value: '1-1',
                      key: '1-1',
                    },
                    {
                      title: '陈杰',
                      value: '1-2',
                      key: '1-2',
                    },
                    {
                      title: '郝丽',
                      value: '1-3',
                      key: '1-3',
                    },
                  ],
                },
                {
                  title: '癫痫总院',
                  value: '2',
                  key: '2',
                  children: [
                    {
                      title: '何芳',
                      value: '2-1',
                      key: '2-1',
                    },
                    {
                      title: '杨超',
                      value: '2-2',
                      key: '2-2',
                    },
                    {
                      title: '冯静',
                      value: '2-3',
                      key: '2-3',
                    },
                    {
                      title: '陈艳',
                      value: '2-4',
                      key: '2-4',
                    },
                    {
                      title: '侯磊',
                      value: '2-5',
                      key: '2-5',
                    },
                  ],
                },
                {
                  title: '上海癫痫病医院',
                  value: '3',
                  key: '3',
                  children: [
                    {
                      title: '孙敏',
                      value: '3-1',
                      key: '3-1',
                    },
                    {
                      title: '刘勇',
                      value: '3-2',
                      key: '3-2',
                    }
                  ],
                },
                {
                    title: '手机号搜索',
                    key: 'phone'
                }
              ],
            loaded: false,
            checked: false,
        
        }
    }
    componentDidMount() {
        this.setState({
            loaded: true,
        });
      }
    goback=()=>{
        history.goBack();
    }
    renderContent = tab =>(
        <div style={{ display: 'flex', justifyContent: 'left',  }}>
            {this.renderRow(tab.key)}
        </div>
    )       
    renderRow=(index)=>{
        if (index=='phone') {
        return <div className={styles.listBox}>{this.searchPhone()}</div>
        }
        else{
        return <div className={styles.listBox}>{this.getDocList(Number(index))}</div>
        }
    }
    searchPhone = () => {
        return <p>11111111111111111111</p>
    }
    getDocList = (key) => {
        const {tabs} = this.state
        const { getFieldProps } = this.props.form;
        // console.log(key);

        let lists = tabs[key-1].children.map((item,index)=>{
    
            return <div key={index} className={styles.list}>
                    <span className={styles.left}>{item.title}</span>
                    <Checkbox  
                    onChange={() => this.onChange(item.title)}
                    >
                    </Checkbox>
                </div>
            })
        return lists
    }
    
    onChange = (val) => {
        if (obj.length===0) {
            obj.push(val)
        }else{
            obj.map((item,index)=>{
                console.log(1,obj);
                if (item == val) {
                    console.log(index);
                    obj.splice(index,1)
                }else if(item !== val){
                    obj.push(val) 
                }
            
            })
        }
        console.log(4,obj);
    }

    render() {
        
        return (
            <div className={styles.bigBox}>
                <div className={styles.topTitle}><Icon type={'left'}  className={styles.icon} onClick={this.goback}/>选择医生<p>完成</p></div>
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
            </div>
        )
    }
}
const ChooseDoc1 = createForm()(ChooseDoc);
export default ChooseDoc1