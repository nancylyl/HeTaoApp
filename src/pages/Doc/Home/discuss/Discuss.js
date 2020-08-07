import React, { Component } from 'react'
import styles from './discuss.module.scss'
import { Icon, Grid } from 'antd-mobile';
import creatHistory from 'history/createHashHistory'  //返回上一页这段代码
const history = creatHistory();//返回上一页这段代码

export default class Discuss extends Component {

    goback=()=>{
        history.goBack();
    }
    render() {
        return (
            <div className={styles.bigBox}>
                <div className={styles.topTitle}><Icon type={'left'}  className={styles.icon} onClick={this.goback}/>病历探讨</div>
            </div>
        )
    }
}
