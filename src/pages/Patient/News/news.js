import React from 'react';
import {Icon, NavBar,Tabs, WhiteSpace, Badge,WingBlank} from "antd-mobile";
import './news.scss'

const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码

const tabs = [
    { title: <Badge>健康提醒</Badge> },
    { title: <Badge>活动提醒</Badge> },
    { title: <Badge>系统提醒</Badge> },
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
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" onClick={this.goback}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <span onClick={this.display_name.bind(this)}>全部已读</span>
                    ]}
                >消息
                </NavBar>
                <Tabs tabs={tabs}
                      initialPage={0}
                      onChange={(tab, index) => { console.log('onChange', index, tab); }}
                      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', flexWrap:'wrap', justifyContent: 'start', height: 'auto', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div className='box'>
                                <Badge dot style={{marginTop:20,display:this.state.display_name}}></Badge>
                                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3292949583,636505648&fm=26&gp=0.jpg" alt=""/>
                                <p>您已经2天没有写日志了请及时填写</p>
                                <div>
                                    <Icon type='right' size='lg' color='#e4e4e4'></Icon>
                                    <p>11.15 11:02</p>
                                </div>
                            </div>
                        </WingBlank>
                        <WingBlank>
                            <div className='box'>
                                <Badge dot style={{marginTop:20,display:this.state.display_name}}></Badge>
                                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3292949583,636505648&fm=26&gp=0.jpg" alt=""/>
                                <p>您的医生更新了病历请查看</p>
                                <div>
                                    <Icon type='right' size='lg' color='#e4e4e4'></Icon>
                                    <p>11.15 11:02</p>
                                </div>
                            </div>
                        </WingBlank>
                        <WingBlank>
                            <div className='box'>
                                <Badge dot style={{marginTop:20,display:this.state.display_name}}></Badge>
                                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3292949583,636505648&fm=26&gp=0.jpg" alt=""/>
                                <p>唐马儒医生提示您该吃药了，如果已吃请记录！</p>
                                <div>
                                    <Icon type='right' size='lg' color='#e4e4e4'></Icon>
                                    <p>11.15 11:02</p>
                                </div>
                            </div>
                        </WingBlank>
                    </div>
                    <div style={{ display: 'flex', flexWrap:'wrap', justifyContent: 'start', height: 'auto', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div className='box'>
                                <Badge dot style={{marginTop:20,display:this.state.display_name}}></Badge>
                                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3292949583,636505648&fm=26&gp=0.jpg" alt=""/>
                                <p>唐马儒医生发布了患教活动请及时参加</p>
                                <div>
                                    <Icon type='right' size='lg' color='#e4e4e4'></Icon>
                                    <p>11.15 11:02</p>
                                </div>
                            </div>
                        </WingBlank>

                    </div>
                    <div style={{ display: 'flex', flexWrap:'wrap', justifyContent: 'start', height: 'auto', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div className='box'>
                                <Badge dot style={{marginTop:20,display:this.state.display_name}}></Badge>
                                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3292949583,636505648&fm=26&gp=0.jpg" alt=""/>
                                <p>您的会员将在后天到期，请及时续费！</p>
                                <div>
                                    <p className='box-date'>11.15 11:02</p>
                                </div>
                            </div>
                        </WingBlank>

                        <WingBlank>
                            <div className='box'>
                                <Badge dot style={{marginTop:20,display:this.state.display_name}}></Badge>
                                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3292949583,636505648&fm=26&gp=0.jpg" alt=""/>
                                <p>您续费了1年的核桃会员</p>
                                <div>
                                    <p className='box-date'>11.15 11:02</p>
                                </div>
                            </div>
                        </WingBlank>

                        <WingBlank>
                            <div className='box'>
                                <Badge dot style={{marginTop:20,display:this.state.display_name}} ></Badge>
                                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3292949583,636505648&fm=26&gp=0.jpg" alt=""/>
                                <p>新版本上线了请及时更新</p>
                                <div>
                                    <p className='box-date'>11.15 11:02</p>
                                </div>
                            </div>
                        </WingBlank>

                    </div>
                </Tabs>
            </div>
        )
    }
}

export default news
