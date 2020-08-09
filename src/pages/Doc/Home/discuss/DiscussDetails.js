import React, { Component } from 'react';
import moment from 'moment';
import styles from './discuss.module.scss';
import { Icon, Button } from 'antd-mobile';

const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码

class DiscussDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: []
        }
    }
    UNSAFE_componentWillMount() {
        console.log(this.props.location.state.data);
        this.setState({
            details: this.props.location.state.data
        })
      }
    goback=()=>{
        history.goBack();
    }
    chargeType=(type)=>{
       if (type=='收费') {
            return <p>费用<span className={styles.right}>{this.state.details.attendMoney} 核桃币</span></p>
       }else if(type=='奖励'){
            return <p>奖励<span className={styles.right}>将在探讨结束后发放</span></p>
       }else{
            return <p>免费</p>
       }
    }
    toJion=()=>{
        this.props.history.push('/doc/jionDiscuss',{data:this.state.details});
    }
    render() {
        const {details} = this.state
        return (
            <div className={styles.bigBox}>
                <div className={styles.topTitle}><Icon type={'left'}  className={styles.icon} onClick={this.goback}/>探讨详情</div>
                <div className={styles.content}>
                    <div>
                        <p>{details.discussName}</p>
                        <p>会议持续时间：{details.continueTime*60}分钟</p>
                    </div>
                    <div>
                        <p>参会主持<span className={styles.right}>{details.doctoId}&nbsp;|&nbsp;{details.hospital}{details.subject}{details.profession}</span></p>
                        <p>邀请嘉宾<span className={styles.right}>{details.inviteGuests}</span></p>
                        <p>会议时间<span className={styles.right}>{moment(details.discussStart).format('YY/MM/DD HH:mm')}</span></p>
                        <p>参会人数<span className={styles.right}>{details.joinNumber}人</span></p>
                        {this.chargeType(details.chargeType)}
                        <p>探讨患者信息<span className={styles.right}>{details.name.charAt(0)}***</span></p>
                        <div className={styles.explain}>
                            <p>探讨说明</p>
                            <div>{details.discussExplain}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.btns}>
                    <Button className={styles.bottom} icon={<i className={['iconfont icon-weibiaoti5']} />}> <p>会议室</p> </Button>
                    <Button type="primary" className={styles.bottom} onClick={this.toJion}>立即参与</Button>
                </div>
            </div>
        );
    }
}

export default DiscussDetails;