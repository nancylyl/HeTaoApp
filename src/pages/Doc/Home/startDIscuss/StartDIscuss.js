import React, { Component } from 'react'
import styles from './start.module.scss'
import { Icon, Button, DatePicker, List, InputItem, ActionSheet, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import ChooseDoc from './ChooseDoc';
import ChoosePatient from './ChoosePatient';
import SponsorDiscuss from './SponsorDiscuss';



const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcOffset = new Date(now.getTime() - (now.getTimezoneOffset() * 60000));

class StartDIscuss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dpValue: now,
            formVal: '',
            selectList: '',
            showDocList: false,
            showPatList: false,
            showSponsor: false,
            sponsorValue: ''
        }
    }
    goback=()=>{
        history.goBack();
    }
    // 时间验证
    // validateDatePicker = (rule, date, callback) => {
    //     if (date && date.getMinutes() !== 15) {
    //         callback();
    //     } else {
    //         callback(new Error('15 is invalid'));
    //     }
    // }  

   /*  选择医生 */
    chooseDoc = () => {
        this.docListVisible(true)
    }
    docListVisible = (showDocList) => {
        this.setState({
            showDocList
        })
    }
    docListOk = (val) => {
        this.props.form.setFieldsValue({
            inviteGuests: val.toString()
        })
        this.docListVisible(false)
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
                chargeType:BUTTONS[buttonIndex] 
            })
        });
      }
    // 是否需要使用核桃币
    attendMoney = () => {
        let type = this.props.form.getFieldValue('chargeType');
        if(type == '收费'|| type == '给予奖励'){
            return <InputItem placeholder="请输入费用" extra="核桃币" clear
            {...this.props.form.getFieldProps('attendMoney', {
                rules: [{ required: true, message: '请选择' },],
            })}
        >费用</InputItem>
        }
    }
    /* 选择患者 */
    choosePat=()=>{
        this.patListVisible(true)
    }
    patListVisible=(showPatList)=>{
        this.setState({
            showPatList
        })
    }
    patListOk = (val) => {
        this.props.form.setFieldsValue({
            patietInfo: val
        })
        this.patListVisible(false)
    }

    //  得到提交按钮
    chooseBtn = () => {
        let list = this.props.form.getFieldsValue()
        for(var item in list){
            if(list[item]==undefined||list[item]==''){
                return <Button style={{backgroundColor:'rgb(209, 207, 207)'}} className={styles.button} onClick={this.prompt}>确认发起</Button>
            }
        }
        return <Button type="primary" className={styles.button} onClick={this.onSubmit}>确认发起</Button>        
    }
    // 提交表单
    onSubmit = () => {
        console.log(this.props.form.getFieldsValue());
        let type = this.props.form.getFieldValue('chargeType');
        if (type=='给予奖励') {
            this.setState({
                sponsorValue: this.props.form.getFieldsValue(),
                showSponsor: true
            })
        }else{
            this.setState({
                sponsorValue: this.props.form.getFieldsValue(),
            },()=>{
                this.props.history.push('/doc/success',{data:this.state.sponsorValue})
            })
        }
        
        // this.props.form.validateFields({ force: true }, (error) => {
        // if (!error) {
        //     console.log(this.props.form.getFieldsValue());
        // } else {
        //     console.log(error);
        //     alert('Validation failed');
        // }
        // });
    }
    prompt = () => {
        Toast.fail("输入框不能为空", 1)
    }
    sponsorVisible = (showSponsor) => {
        this.setState({
            showSponsor
        })
    }


    render() {
        const { showDocList, showPatList, showSponsor, sponsorValue } = this.state
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
                            {...getFieldProps('chargeType', {
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
                            onClick={this.choosePat}
                            editable={false}
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
                <ChooseDoc
                    visible={showDocList}
                    onClose={this.docListVisible}
                    onOk={this.docListOk}
                />
                <ChoosePatient
                    visible={showPatList}
                    onClose={this.patListVisible}
                    onOk={this.patListOk}
                />
                {showSponsor&&<SponsorDiscuss
                    visible={showSponsor}
                    onClose={this.sponsorVisible}
                    value= {sponsorValue}
                />}
            </div>
        )
        
    }
}
const TestWrapper = createForm()(StartDIscuss);
export default TestWrapper
