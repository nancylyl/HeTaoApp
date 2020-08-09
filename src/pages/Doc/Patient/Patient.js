import React, { Component } from 'react'
import {Button, Calendar, Icon, NavBar,WhiteSpace } from "antd-mobile";
import './Patient.scss'

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>
        <select name="" id="" className='select'>
            <option value="1">全国</option>
            <option value="2">北京</option>
            <option value="3">上海</option>
        </select>
    </div>
);

export default class Patient extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >患者管理</NavBar>
                <WhiteSpace />
                <PlaceHolder />
                <div>
                    <div>
                        <i className={['iconfont  icon-huanzhehebing']}></i>
                    </div>
                </div>
            </div>
        )
    }
}
