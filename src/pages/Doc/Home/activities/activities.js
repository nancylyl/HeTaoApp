import React from 'react';
import { NavBar, Icon, Button, WhiteSpace, WingBlank, List, Switch, Calendar } from 'antd-mobile';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';


class activities extends React.Component {
  state = {
    data: [
      {
        id: 1,
        datatime: "12-13  10:00:00",
        week: "星期三",
        count: 3,
        adr
      }

    ]
  }
  render () {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" onClick={
            () => {
              this.props.history.push("/doc/home/index");
            }
          } />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Button size={"small"} style={{ width: 60 }}>添加</Button>,
          ]}
        >诊疗活动</NavBar>



      </div>
    )
  }
}

export default activities
