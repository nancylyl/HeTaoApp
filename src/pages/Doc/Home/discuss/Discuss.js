import React, { Component } from 'react'
import styles from './discuss.module.scss'
import moment from 'moment';
import { Carousel, Icon, Tabs, Badge } from 'antd-mobile';
import Axios from '../../../../util/axios'
import Api from '../../../../api/index'

const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();//返回上一页这段代码


export default class Discuss extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [{title: 1,},{title: 2,},{title: 3,},{title: 4,}],
          tabs: [
            {id: 1, title: <Badge> <div className={styles.circle}></div> 全部病历探讨</Badge>, key: 't1' },
            {id: 2, title: <Badge> <div className={styles.circle}></div> 我的探讨</Badge>, key: 't2' },
          ],
          discussList: [],
          loaded: false
        }
    }

    into() {
        Axios({
          url: Api.discuss.getDiscussList,
          params: {
            id: 1,
          },
          // isDev: 1,
          method: "get",
        })
          .then((res) => {
            console.log(res)
            if (res.status== 200) {
              this.setState({
                discussList: res.data.data,
                loaded: true,
              })
            } else {
            }
          })
      }
    componentDidMount() {
      this.into();
    }
    goToUrl =(param)=>{
      this.props.history.push('/doc/discussDetails',{data:param});
    }
    goback=()=>{
      this.props.history.push('/doc')
    }
    renderContent = tab =>(
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  }}>
        {this.renderRow(tab.id)}
    </div>
    )       
    renderRow=(index)=>{
        if (index==1) {
        return <div className={styles.listBox}>{this.getDiscussList()}</div>
        }else{
        return <div className={styles.listBox}>{this.getDiscussList()}</div>
        }
    }
    getDiscussList = () => {
        const {discussList} = this.state
        let lists = discussList.map((item,index)=>{
            // console.log();
            return <div key={index} className={styles.list} onClick={this.goToUrl.bind(this,item)}>
                    <h1>{item.discussName}</h1>
                    <p>{item.explain}</p>
                    <p>参会主持：{item.doctoId}&nbsp;|&nbsp;{item.hospital}{item.subject}{item.profession}</p> 
                    {/* <p>参会主持：{item.doctor[0].name}&nbsp;|&nbsp;{item.doctor[0].hospital}{item.doctor[0].subject}{item.doctor[0].profession}</p> */}
                    <p>时间：{moment(item.discussStart).format('YY/MM/DD')}</p>
                    <p>已报名人数：{item.bNumber}人&nbsp;&nbsp;（{item.joinNumber}人）<span>{item.chargeType}</span></p>
                </div>
        })
        return lists
    }

    goStart = () => {
      this.props.history.push('/doc/startDiscuss');
    }
    render() {
        return (
            <div className={styles.bigBox}>
                <div className={styles.topTitle}><Icon type={'left'}  className={styles.icon} onClick={this.goback}/>病历探讨</div>
                <Carousel
                    autoplay
                    infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    className={styles.banner}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href=""
                        style={{ display: 'inline-block', width: '100%', height: '40vw' }}
                        className={styles.img}
                        >
                        {val.title}
                        <img
                            src=''
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
                <div className={styles.tabs}>
                    {this.state.loaded&&<Tabs tabs={this.state.tabs}
                            initialPage={'t1'}
                            page={'t1'}
                            page={this.state.page}
                            
                        >
                            {this.renderContent}  
                    </Tabs>}
                </div>
                <div className={styles.startDiscuss} onClick={this.goStart}>发起<br/>探讨</div>
            </div>
        )
    }
}

