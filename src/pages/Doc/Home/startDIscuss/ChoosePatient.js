import React, { Component } from 'react'
import Drawer from 'components/Drawer';
import styles from './start.module.scss'
import Api from 'api/index'
import Axios from 'util/axios'
import { Radio, Button } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

export default class ChoosePatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            value: -1,
            P_Name: ''
        }
    }
    componentDidMount () {
        // console.log(this.props);
        this.init()
    }    
    init () {
        Axios({
        url: Api.docmypatient.getMyPatientList,
        method: "get",
        })
        .then((res) => {
            const data = res.data;
            // console.log(data);
            if (data.status = "0000") {
            this.setState({
                data: data.data.patients,
                loaded: true
            })
            }
        })
        .finally((e) => {
            // console.log(e);
        })
    }
    
    getPatList = () =>{
        const { data, value } = this.state
        return data.map((item) => {
            return <div key={item.P_ID} className={styles.listBox} onClick={this.choosePat.bind(this,item.P_ID,item.P_Name)}>
                <img src={require(`../../../../assets/images/3.png`)} alt=""/>
                <div className={styles.patInfo}>
                    <p>[{item.P_Name}]</p>
                    <p>[{item.age}岁]&nbsp;&nbsp;[{item.sex==0?'女':'男'}] <span>[{item.typeName}]</span> </p>
                </div>
                <div className={styles.time}>
                    [{item.relevancedate}]
                </div>
                <div className={styles.radio}>
                    <Radio checked={value === item.P_ID}></Radio>
                </div>
            </div>})
    }
    choosePat = (value,P_Name) =>{
        this.setState({
            value,
            P_Name
        })
    }
    okBtn = () => {
        if (this.state.value >= 0) {
            return <Button type="primary" className={styles.button} onClick={this.onOk}>确认</Button>
        }
        return <Button style={{backgroundColor:'rgb(209, 207, 207)'}} className={styles.button} onClick={this.prompt}>确认</Button>       
    }
    onClose = () => {
        this.props.onClose(false)
        this.setState({
            value: -1,
            P_Name: '',
        },function(){
            this.props.onOk(this.state.P_Name)
        })
      }
    onOk = () => {
        this.props.onOk(this.state.P_Name)
    }
    onSearch = () => {
        console.log(11111111);
      }
    render() {
        const { visible } = this.props  
        const { loaded } = this.state
        return (
            <Drawer
                visible= {visible}
                title='选择患者'
                onClose={this.onClose}
                onOk={this.onSearch}
                okText = '搜索'
            >
                <div className={styles.patientList}>
                    <div className={styles.patientBox}>
                    {loaded && this.getPatList()}
                    </div>
                    <div className={styles.btns}>
                        {this.okBtn()}
                    </div> 
                </div>
            </Drawer>
        )
    }
}
