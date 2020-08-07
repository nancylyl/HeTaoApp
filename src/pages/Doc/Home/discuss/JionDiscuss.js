import React, { Component } from 'react'
import moment from 'moment';
import styles from './discuss.module.scss'
import { Icon, Button } from 'antd-mobile';
const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码

export default class JionDiscuss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jionInfo: []
        }
    }
    UNSAFE_componentWillMount() {
        console.log(this.props.location.state.data);
        this.setState({
            jionInfo: this.props.location.state.data
        })
    }
    goback=()=>{
        history.goBack();
    }
    chargeType=(type)=>{
        if (type=='收费') {
             return <div>收费<span className={styles.right}>{this.state.jionInfo.attendMoney} 核桃币</span></div>
        }else if(type=='奖励'){
             return <div>奖励<span className={styles.right}>将在探讨结束后发放</span></div>
        }else{
             return <div>免费</div>
        }
     }
    render() {
        const {jionInfo} = this.state
        return (
            <div className={styles.bigBox}>
            <div className={styles.topTitle}><Icon type={'left'}  className={styles.icon} onClick={this.goback}/>探讨详情</div>
                <div className={styles.content}>
                    <div className={styles.fText}>
                        <p>{jionInfo.discussName}</p>
                        <div className={styles.smallTitle}>
                            <span> 会议持续时间：{jionInfo.continueTime*60}分钟</span>
                            <span className={styles.right}>会议时间：{moment(jionInfo.discussStart).format('YY/MM/DD HH:mm')}</span>
                        </div>
                        {this.chargeType(jionInfo.chargeType)}
                    </div>
                    <div className={styles.jionMan}>参加人姓名<span className={styles.right}>{jionInfo.inviteGuests} </span></div>
                </div>
            </div>
        )
    }
}
