import React from 'react';
import {Icon, NavBar, WhiteSpace} from "antd-mobile";
import './Patient.scss'

const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>
    </div>
);

class allPatient extends React.Component {
    goback=()=>{
        history.goBack();
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" onClick={this.goback}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                >所有患者</NavBar>
                <WhiteSpace size="xs"/>
                <PlaceHolder />
            </div>
        )
    }
}

export default allPatient
