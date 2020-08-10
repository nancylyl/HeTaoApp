import React, { Component } from 'react'
import styles from './start.module.scss'
import { Icon, Button, DatePicker, List, InputItem, ActionSheet, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';

const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcOffset = new Date(now.getTime() - (now.getTimezoneOffset() * 60000));

class StartDIscuss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:'',
            dpValue: now,
            formVal: ''
        }
    }

    goback=()=>{
        history.goBack();
    }
    // 提交表单
    onSubmit = () => {
        console.log(this.props.form.validateFields());
        
        this.props.form.validateFields({ force: true }, (error) => {
          if (!error) {
            console.log(this.props.form.getFieldsValue());
          } else {
            console.log(error);
            alert('Validation failed');
          }
        });
    }
    prompt = () => {
        Toast.fail("输入框不能为空", 1)
    }
    // 时间验证
    // validateDatePicker = (rule, date, callback) => {
    //     if (date && date.getMinutes() !== 15) {
    //         callback();
    //     } else {
    //         callback(new Error('15 is invalid'));
    //     }
    // }  

    // 选择医生
    chooseDoc = () => {
        this.setState({
            formVal: this.props.form.validateFields()
        })
        console.log(this.state.formVal);
        // this.props.navigate("/doc/chooseDoc", { onSelect: this.state.formVal });
        this.props.history.push('/doc/chooseDoc');
    }
    // 费用类型选择
    showActionSheet = () => {
        const BUTTONS = ['免费', '给予奖励', '收费'];
        ActionSheet.showActionSheetWithOptions({
          options: BUTTONS,
          maskClosable: true,
          'data-seed': 'logId',
        },
        (buttonIndex) => {
            this.props.form.setFieldsValue({
                moneyType:BUTTONS[buttonIndex] 
            })
        });
      }
    // 是否需要使用核桃币
    attendMoney = () => {
        let type = this.props.form.getFieldValue('moneyType');
        if(type == '收费'|| type == '给予奖励'){
            return <InputItem placeholder="请输入费用" extra="核桃币" clear
            {...this.props.form.getFieldProps('AttendMoney', {
                rules: [{ required: true, message: '请选择' },],
            })}
        >费用</InputItem>
        }
    }
    //  得到提交按钮
    chooseBtn = () => {
        let list = this.props.form.getFieldsValue()
        // console.log(this.state.formVal);
        for(var item in list){
            if(list[item]==undefined){
                return <Button style={{backgroundColor:'rgb(209, 207, 207)'}} className={styles.button} onClick={this.prompt}>确认发起</Button>
            }
        }
        return <Button type="primary" className={styles.button} onClick={this.onSubmit}>确认发起</Button>        
    }
 
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className={styles.bigBox}>
                <div className={styles.topTitle}><Icon type={'left'}  className={styles.icon} onClick={this.goback}/>病历探讨</div>
                <form  className={styles.form}>
                    <List
                        className="date-picker-list"
                        renderFooter={() => getFieldError('dp') && getFieldError('dp').join(',')}
                    >
                        <InputItem
                            placeholder="请输入探讨主题"
                            clear
                            maxLength={15}
                            {...getFieldProps('discussName', {
                                rules: [
                                { required: true, message: '请输入' },
                                ],
                            })}
                        >探讨主题
                        </InputItem>
                        <InputItem
                            placeholder="请设置参会医生"
                            clear
                            onClick={this.chooseDoc}
                            editable={false}
                            {...getFieldProps('inviteGuests', {
                                rules: [
                                { required: true, message: '请选择' },
                                ],
                            })}
                        > 参会医生
                        </InputItem>
                        <DatePicker
                        {...getFieldProps('enrollStart', {
                            rules: [
                            { required: true, message: '请选择' },
                            { validator: this.validateDatePicker },
                            ],
                        })}
                        >
                            <List.Item arrow="horizontal">探讨报名开始时间</List.Item>
                        </DatePicker>
                        <DatePicker
                        {...getFieldProps('enrollEnd', {
                            rules: [
                            { required: true, message: '请选择' },
                            { validator: this.validateDatePicker },
                            ],
                        })}
                        >
                            <List.Item arrow="horizontal">探讨报名结束时间</List.Item>
                        </DatePicker>
                        <DatePicker
                        {...getFieldProps('discussStart', {
                            rules: [
                            { required: true, message: '请选择' },
                            { validator: this.validateDatePicker },
                            ],
                        })}
                        >
                            <List.Item arrow="horizontal">探讨开始时间</List.Item>
                        </DatePicker>
                        <InputItem
                            placeholder="持续时间"
                            extra="分钟"
                            clear
                            type={'number'}
                            {...getFieldProps('continueTime', {
                                rules: [
                                { required: true, message: '请选择' },
                                ],
                            })}
                        >
                            探讨持续时间
                        </InputItem>
                        <InputItem
                            placeholder="请选择"
                            clear
                            onClick={this.showActionSheet}
                            editable={false}
                            {...getFieldProps('moneyType', {
                                rules: [
                                { required: true, message: '请选择' },
                                ],
                            })}
                        >
                            费用类型
                        </InputItem>
                        
                        {this.attendMoney()}
                        <InputItem
                            placeholder="请选择"
                            clear
                            // onClick={this.choosePat}
                            // editable={false}
                            // value={this.state.patietInfo}
                            {...getFieldProps('patietInfo', {
                                rules: [
                                { required: true, message: '请选择' },
                                ],
                            })}
                        >
                        探讨患者信息
                        </InputItem>
                        <List.Item>
                            <p style={{padding:'5px 0 15px'}}>探讨说明</p>
                            <textarea
                                rows="6"
                                placeholder="请输入探讨说明"
                                {...getFieldProps('explain', {
                                    rules: [
                                    { required: true, message: '请选择' },
                                    ],
                                })}
                                className={styles.explain}
                            >
                            </textarea>
                        </List.Item>
                    </List>
                </form>
                <div className={styles.btns}>
                    {this.chooseBtn()}
                </div>
            </div>
        )
        
    }
}
const TestWrapper = createForm()(StartDIscuss);
export default TestWrapper
