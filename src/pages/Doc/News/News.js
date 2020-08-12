import React from 'react';
import "./boxs.css"
import {Icon, NavBar,Tabs, WhiteSpace, Badge} from "antd-mobile";
const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码

const tabs = [
    { title: <Badge>系统消息</Badge> },
    { title: <Badge>交易消息</Badge> },
    { title: <Badge>探讨消息</Badge> },
    { title: <Badge>活动消息</Badge> },
];

class news extends React.Component {
    constructor() {
        super();
        this.state = {
            display_name: 'inline-block', //此状态机为display的取值
        }
    }
    display_name() { //编辑按钮的单击事件，修改状态机display_name的取值
        if (this.state.display_name == 'none') {
            this.setState({
                display_name: 'inline-block',
            })
        }
        else if (this.state.display_name == 'inline-block') {
            this.setState({
                display_name: 'none',
            })

        }
    }

    goback=()=>{
        history.goBack();
    }
    read=()=>{

    }
    render() {
        return (
            <div className="boxc">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" onClick={this.goback}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                >消息中心
                </NavBar>
                <Tabs tabs={tabs}
                      initialPage={0}
                      onChange={(tab, index) => { console.log('onChange', index, tab); }}
                      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    {/*系统消息*/}
                    <div className="theSys">
                        <div className="line1">
                            <p style={{textAlign:'center'}} className="theline2">2017-09-23  15:43</p>
                            <div >您的患者 唐马儒 自助添加了一条就诊记录请及时查看！</div>
                        </div>

                        <div className="line1">
                            <p style={{textAlign:'center'}} className="theline2">2017-09-23  15:43</p>
                            <div >您的患者 唐马儒 已经完成就诊，请您及时完善就诊信息！</div>
                        </div>
                        <div className="line1">
                            <p style={{textAlign:'center'}} className="theline2">2017-09-23  15:43</p>
                            <div>您的患者 唐马儒 就诊记录中的用药内容没有完善请及时完善！</div>
                        </div>
                        <div className="line1">
                            <p style={{textAlign:'center'}} className="theline2">2017-09-23  15:43</p>
                            <div >您的患者 唐马儒 记录了 5 次 发作次数。请及时查看！</div>
                        </div>
                        <div className="line1">
                            <p style={{textAlign:'center'}} className="theline2">2017-09-23  15:43</p>
                            <div>您的患者 唐马儒 记录了4项不良反应。请及时查看！</div>
                        </div>

                    </div>
                    {/*交易消息*/}
                    <div className="theSys">
                        <div className="line1">
                            <p style={{textAlign:'center'}} className="theline2">2017-09-23  15:43</p>
                            <div>您于2017-09-23  15:43   收入 5个核桃</div >
                        </div>
                        <div className="line1">
                            <p style={{textAlign:'center'}} className="theline2">2017-09-23  15:43</p>
                            <div>您于2017-09-23  15:43   收入 5个核桃</div>
                        </div>
                        <div className="line1">
                            <p style={{textAlign:'center'}} className="theline2">2017-09-23  15:43</p>
                            <div >您于2017-09-23  15:43   支付 10个核桃</div>
                        </div>
                    </div>
                    {/*探讨消息*/}
                    <div className="theSys">
                        <div className="line1">
                            <p style={{textAlign:'center'}} className="theline2">2017-09-23  15:43</p>
                            <div>您报名的XXXXXX病历探讨将在10分钟之后开始，请您准时参加。</div>
                        </div>
                    </div>
                    {/*活动消息*/}
                    <div  className="theSys">
                        <div className="line1">
                            <p style={{textAlign:'center'}} className="theline2">2017-09-23  15:43</p>
                            <div>您组织的XXXXXX患教活动将在10分钟之后开始，请您准时开始直播。</div>
                        </div>

                    </div>
                </Tabs>
            </div>
        )
    }
}

export default news
