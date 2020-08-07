import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './home.module.scss'
import { Carousel, Button, WhiteSpace, Card, Badge, List } from 'antd-mobile';
import Map from './Map'
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: 1,
        },
        {
          title: 2,
        },
        {
          title: 3,
        },
        {
          title: 4,
        }
      ],
      imgHeight: 176,
      docInfo: {
        name: "张三",
        avatar: '3.png',
        status: '审核通过',
        pnumber: 100,/* 所有患者 */
        newpnumber: 15,/* 本周新增患者 */
        gpnum: 100,/* 关注患者 */
        newgpnum: 15,/* 本周新增关注患者 */
      }
    }
  }
  render() {
    const {docInfo} = this.state
    return (
      <div className={styles.bigBox}>
        <div className={styles.topTitle}>核桃仁</div>
        {/* =========================banner轮播图======================== */}
        <Carousel
          autoplay
          // infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
          className={styles.banner}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              className={styles.img}
            >
              <h3>{val.title}</h3>
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
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
        <div className={styles.quick}>
          <Link to='/discuss'  className={styles.bottom}>
            <Button icon={<i className={['iconfont icon-jiankangguanli']} />}>病历探讨</Button>
          </Link>
          <Link to='/discuss' className={styles.bottom}>
            <Button icon={<i className={['iconfont icon-liwu']} />}>诊疗活动</Button>
          </Link>
        </div>
        <div className={styles.dInfo}>
            <div className={styles.img}>
              <img src={require('../../../assets/images/3.png')} alt=""/>
              <div>{docInfo.status}</div>
            </div>
            <div>
              <div>
                <p>{docInfo.pnumber}</p>
                <p>所有患者</p>
              </div>
              <div>
                <p>{docInfo.gpnum}</p>
                <p>关注患者</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div>
              <div>
                <p>{docInfo.newpnumber}</p>
                <p>本周新增患者</p>
              </div>
              <div>
                <p>{docInfo.newgpnum}</p>
                <p>本周新增关注患者</p>
              </div>
            </div>
        </div>
        {/* 地图 */}
        <div className={styles.mapBox}>
          <Map></Map>
        </div>
      </div>
    )
  }
}
