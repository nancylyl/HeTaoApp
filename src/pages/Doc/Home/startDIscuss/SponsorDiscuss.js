import React, { Component } from 'react';
import styles from './start.module.scss'
import Drawer from 'components/Drawer';
import moment from 'moment';
import {withRouter} from "react-router-dom";
import { Button, Modal, Toast } from 'antd-mobile';

const alert = Modal.alert;

class SponsorDiscuss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''  
        }
    }
    UNSAFE_componentWillMount() {
        this.setState({
            value: this.props.value 
        });
        console.log(this.props.value );
    }
    onClose = () => {
        this.props.onClose(false)
    }
    toPay(){
       
          
    }
    toSure = () => {
        alert('支付', '是否确认支付？', [
            { text: '取消', onPress: () => console.log('cancel') },
            {
              text: '确认',
              onPress: () => 
              new Promise((resolve) => {
                Toast.info('支付成功', 1);
                setTimeout(resolve, 1000);
              }).then(() => {
                  this.props.history.push('/doc/success',{data:this.state.value})
              })
            },
        ])
    }
    render() {
        const { visible } = this.props  
        const { value } = this.state 
        return (
            visible&&<Drawer
                visible= {visible}
                title='发起病历探讨'
                onClose={this.onClose}
                >
                <div className={styles.Sponsor}>
                    <div className={styles.context}>
                        <div>
                            <p>{value.discussName}</p>
                            <p className={styles.smallTitle}>
                                <span> 会议持续时间：{value.continueTime}分钟</span>
                                <span className={styles.right}>会议时间：{moment(value.discussStart).format('YY/MM/DD HH:mm')}</span>
                            </p>
                            <p>{value.chargeType}<span className={styles.right}>{value.attendMoney} 核桃币</span></p>
                        </div>
                    </div>
                    <div className={styles.jionMan}>
                        <p>奖励核桃币将在探讨结束后均分给所有参加探讨的医生。</p>
                        <p>选择支付方式</p>
                    </div>
                    <div className={styles.checkbox}>
                        <p>核桃币支付 <input type="checkbox" readOnly checked className={styles.check}/></p>  
                    </div>
                    <div className={styles.btns}>
                        <Button className={styles.button}> {value.attendMoney} 核桃币</Button>
                        <Button type="primary" className={styles.button} onClick={this.toSure}>确认</Button>
                    </div>
                </div>
            </Drawer>
        );
    }
}

export default withRouter(SponsorDiscuss);