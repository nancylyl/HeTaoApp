import React from 'react';
import {Icon, NavBar,SegmentedControl, WingBlank,Radio,List} from "antd-mobile";
import './MyInfo.scss'

const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码

const RadioItem = Radio.RadioItem;

class recharge extends React.Component {
    goback=()=>{
        history.goBack();
    }

    state = {
        value: 0,
    };
    onChange = (value) => {
        console.log('checkbox');
        this.setState({
            value,
        });
    };
    render() {
        const { value } = this.state;
        const data = [
            { value: 0, label: '' },
            { value: 1, label: '' },
        ];
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" onClick={this.goback}/>}
                >充值
                </NavBar>
                <p id='choose'>选择充值金额</p>
                <div className='cash'>
                    <p>50</p>
                    <p>100</p>
                    <p>200</p>
                    <p>300</p>
                    <p>500</p>
                    <p>自定义金额</p>
                </div>
                <div className='box-down'>
                    <p>选择充值方式</p>
                    <div className='box-down-f'>
                        <div className='box-down-s'>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597225490464&di=ee1ce8463ffc3aef3a75a88c7d3320e0&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2F2e2eb9389b504fc22e1f054befdde71190ef6d38.jpg" alt=""/>
                            <span>支付宝</span>
                        </div>
                        <div className='box-down-s'>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597225444409&di=cfec2234cc1e486c866fbac19446f471&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F91%2F37%2F6356f169181803b.jpg" alt=""/>
                            <span>微信</span>
                        </div>
                        <div className='radio'>
                            <input name="cash" type="radio" value="" /><br/>
                            <input name="cash" type="radio" value="" />
                        </div>
                    </div>
                </div>
                <div className='box-down-t' onClick={() => {
                    this.props.history.push("/doc/MyInfo/rechargeS")
                }}>立即充值</div>
            </div>
        )
    }
}

export default recharge
