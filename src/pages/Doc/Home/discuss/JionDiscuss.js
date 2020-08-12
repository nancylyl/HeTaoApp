import React, { Component } from 'react'
import moment from 'moment';
import styles from './discuss.module.scss'
import { Toast, Icon, Button, Modal } from 'antd-mobile';
const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码
const alert = Modal.alert;
export default class JionDiscuss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jionInfo: []
        }
    }
    UNSAFE_componentWillMount() {
        this.setState({
            jionInfo: this.props.location.state.data
        })
    }
    goback=()=>{
        history.goBack();
    }
    chargeType=(type)=>{
        if (type=='收费') {
             return <p>{type}<span className={styles.right}>{this.state.jionInfo.attendMoney} 核桃币</span></p>
        }else if(type=='奖励'){
             return <p>奖励<span className={styles.right}>将在探讨结束后发放</span></p>
        }else{
             return <p>免费</p>
        }
     }
     charge=(types)=>{
        if (types=='收费') {
             return <div className={styles.checkbox}>
                        <p>选择支付方式</p>
                        <div>
                            <p>核桃币支付 <input type="checkbox" readOnly checked className={styles.check}/></p>
                        </div>
                        <div className={styles.btns}>
                            <Button className={styles.bottom}> {this.state.jionInfo.attendMoney} 核桃币</Button>
                            <Button type="primary" className={styles.bottom} onClick={this.toJion.bind(this,types)}>确认</Button>
                        </div>
                    </div>
             
        }else if(types=='奖励'){
             return <div className={styles.btns}>
                        <Button type="primary" className={styles.bottom} onClick={this.toJion.bind(this,types)}>确认</Button>
                    </div>
        }else{
             return <div className={styles.checkbox}>
                        <p>选择支付方式</p>
                        <div>
                            <p>核桃币支付 <input type="checkbox" checked className={styles.check}/></p>
                        </div>
                        <div className={styles.btns}>
                            <Button className={styles.bottom}>免费</Button>
                            <Button type="primary" className={styles.bottom} onClick={this.toJion.bind(this,types)}>确认</Button>
                        </div>
                    </div>
        }
     }
    toJion=(type)=>{
        if  (type=='收费') {
            alert('支付', '是否确认支付？', [
                { text: '取消', onPress: () => console.log('cancel') },
                {
                  text: '确认',
                  onPress: () => 
                  new Promise((resolve) => {
                    Toast.info('支付成功', 1);
                    setTimeout(resolve, 1000);
                  }).then(() => {
                    Toast.info('参与成功', 1);
                  }).then(() => {
                    this.props.history.push('/doc/discuss')
                  })
                },
            ])
        }else{
            alert('', '是否确认参与？', [
                { text: '取消', onPress: () => console.log('cancel') },
                {
                  text: '确认',
                  onPress: () => 
                  new Promise((resolve) => {
                    Toast.info('参与成功', 1);
                    setTimeout(resolve, 1000);
                  }).then(() => {
                      this.props.history.push('/doc/discuss')
                  })
                },
            ])
        }
        
    }
    render() {
        const {jionInfo} = this.state
        return (
            <div className={styles.jionBox}>
                <div className={styles.topTitle}><Icon type={'left'}  className={styles.icon} onClick={this.goback}/>{this.props.location.state.title}</div>
                    <div className={styles.context}>
                        <div>
                            <p>{jionInfo.discussName}</p>
                            <p className={styles.smallTitle}>
                                <span> 会议持续时间：{jionInfo.continueTime}分钟</span>
                                <span className={styles.right}>会议时间：{moment(jionInfo.discussStart).format('YY/MM/DD HH:mm')}</span>
                            </p>
                            {this.chargeType(jionInfo.chargeType)}
                        </div>
                        
                    </div>
                    <div className={styles.jionMan}>
                        <p>参加人姓名<span className={styles.right}>{jionInfo.inviteGuests} </span></p>
                    </div>
                    {this.charge(jionInfo.chargeType)}
            </div>
        )
    }
}
