import React from 'react';
import {Icon, NavBar} from "antd-mobile";
import Axios from '../../../util/axios'
import Api from '../../../api/index'
import './MyInfo.scss'

const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码

class AccountInf extends React.Component {
    goback=()=>{
        history.goBack();
    }
    constructor(props) {
        super(props);
        this.state={

        }
    }
    getNumber = () => {
        Axios({
            url: Api.AccountInf.getNumber,

            isDev:1,
            method:"POST",
        })
            .then((res) => {
                console.log(res)
                // this.setState({
                //     dataSource : res.data.data
                // })
            })
    }
    componentWillMount() {
        this.getNumber();
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" onClick={this.goback}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                >账户信息
                </NavBar>
                <div className='AccBox'>
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3292949583,636505648&fm=26&gp=0.jpg" alt=""/>
                    <p>当前核桃：29</p>
                    <div className='AccBox-1'>
                        <div onClick={() => {
                            this.props.history.push("/doc/MyInfo/recharge")
                        }}>充值</div>
                        <div className='AccBox-11' onClick={() => {
                            this.props.history.push("/doc/MyInfo/detail")
                        }}>明细</div>
                    </div>
                    <div className='AccBox-2'>
                        <p>规则：</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountInf
