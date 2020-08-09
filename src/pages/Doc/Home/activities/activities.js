import React from 'react';
import { NavBar, Icon,Button, WhiteSpace, WingBlank,List, Switch, Calendar  } from 'antd-mobile';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';


class activities extends React.Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Button size={"small"} style={{width:120}}>添加</Button>,
                    ]}
                >诊疗活动</NavBar>
                <Calendar/>
            </div>
        )
    }
}

export default activities
