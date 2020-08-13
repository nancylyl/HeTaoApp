import React from 'react';
import {Icon, NavBar, WingBlank} from "antd-mobile";
import './MyInfo.scss'
const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码
class detail extends React.Component {
    goback=()=>{
        history.goBack();
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" onClick={this.goback}/>}
                >明细
                </NavBar>
                <WingBlank>
                    <div className='detail-div'>xxxxxxxx充值<span>+500</span></div>
                </WingBlank>
                <WingBlank>
                    <div className='detail-div'>被收取核桃<span>-100</span></div>
                </WingBlank>
            </div>
        )
    }
}

export default detail
