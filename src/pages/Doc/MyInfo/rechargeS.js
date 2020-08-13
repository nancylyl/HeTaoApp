import React from 'react';
import {Result, Icon, WhiteSpace, NavBar} from 'antd-mobile';
import './MyInfo.scss'
const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码
const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;
class rechargeS extends React.Component {
    goback=()=>{
        history.goBack();
    }
    render() {
        return (
            <div className="result-example">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" onClick={this.goback}/>}
                >支付结果
                </NavBar>
                <div className="sub-title">支付成功</div>
                <Result
                    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
                    title="支付成功"
                    message={<div></div>}
                />
                <WhiteSpace />
                <div className="sub-title">验证成功</div>
                <Result
                    img={<Icon type="check-circle" className="spe" style={{ fill: '#1F90E6' }} />}
                    title="验证成功"
                    message="所提交内容已成功完成验证"
                />
                <WhiteSpace />
                <div className="sub-title">支付失败</div>
                <Result
                    img={<Icon type="cross-circle-o" className="spe" style={{ fill: '#F13642' }} />}
                    title="支付失败"
                    message="所选银行卡余额不足"
                />
                <WhiteSpace />
                <div className="sub-title">等待处理</div>
                <Result
                    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg')}
                    title="等待处理"
                    message="已提交申请，等待银行处理"
                />
                <WhiteSpace />
                <div className="sub-title">操作失败</div>
                <Result
                    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg')}
                    title="无法完成操作"
                    message=""
                />
            </div>
        )
    }
}

export default rechargeS
