import React, { Component } from 'react'
import styles from './start.module.scss'
import {  Icon } from 'antd-mobile';

const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码

export default class ChooseDoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    goback=()=>{
        history.goBack();
    }


    render() {
        return (
            <div className={styles.bigBox}>
                <div className={styles.topTitle}><Icon type={'left'}  className={styles.icon} onClick={this.goback}/>选择医生<p>完成</p></div>
       
                
            </div>
        )
    }
}
