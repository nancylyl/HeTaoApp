import React, { Component } from 'react'
import styles from './start.module.scss'
import { Icon, Button, List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import moment from 'moment';
class Success extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: '',
            loaded: false
        }
    }
    UNSAFE_componentWillMount() {
        this.setState({
            success: this.props.location.state.data,
            loaded: true
        })
    }
    componentDidMount() {
        this.init();
    }
    init = () =>{
        const { success } = this.state;
        this.props.form.setFieldsValue({
          discussName: success.discussName,
          discussStart: moment(success.discussStart).format('YY/MM/DD HH:mm'),
          chargeType: success.chargeType,
          attendMoney: success.attendMoney,
          continueTime: success.continueTime,
          patietInfo: success.patietInfo,
        });
    }
    goBack=()=>{
        this.props.history.push('/doc/discuss')
    }
    // 是否展示费用
    attendMoney = () => {
        let type = this.state.success.chargeType;
        if(type == '收费'|| type == '给予奖励'){
            return <InputItem  extra="核桃币" 
                        editable={false}
                        {...this.props.form.getFieldProps('attendMoney', {
                        })}
                    >费用</InputItem>
        }
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className={styles.bigBox}>
                <div className={styles.topTitle}><Icon type={'left'} className={styles.icon} onClick={this.goBack}/>病历探讨</div>
                <div className={styles.success}>
                    <div className={styles.okIcon}>
                        <img src={require(`assets/images/success.png`)} alt=""/>
                        <p>已发起病历探讨！</p>
                    </div>
                    {this.state.loaded&&<form  className={styles.okForm}>
                        <List
                            className="date-picker-list"
                            renderFooter={() => getFieldError('dp') && getFieldError('dp').join(',')}
                        >
                            <InputItem
                                editable={false}
                                {...getFieldProps('discussName', {
                                })}
                            >探讨主题
                            </InputItem>
                        
                            <InputItem
                                editable={false}
                                {...getFieldProps('discussStart', {
                                })}
                            >探讨开始时间
                            </InputItem>
                            <InputItem
                                extra="分钟"
                                editable={false}
                                {...getFieldProps('continueTime', {
                                })}
                            >
                                探讨持续时间
                            </InputItem>
                            <InputItem
                                editable={false}
                                {...getFieldProps('chargeType', {
                                })}
                            >
                                费用类型
                            </InputItem>
                            {this.attendMoney()}
                            <InputItem
                                editable={false}
                                {...getFieldProps('patietInfo', {
                                })}
                            >
                            探讨患者信息
                            </InputItem>
                        </List>
                    </form>}
                    
                </div>
                <div className={styles.btns}>
                    <Button style={{backgroundColor:'rgb(209, 207, 207)'}} className={styles.button} onClick={this.goBack}>返回</Button>
                </div>
            </div>
        )
    }
}
const Success1 = createForm()(Success);
export default Success1