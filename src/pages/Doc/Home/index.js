import React, { Component } from 'react'
import styles from './home.module.scss'
import { Carousel, Button } from 'antd-mobile';
import Map from './Map'
import Axios from 'util/axios'
import Api from 'api/index'

export default class index extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      carouselList: [],//轮播图
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
  getCarouselList () {
    Axios({
      isDev: 1,
      url: "/bannerManage/showOff",
    })
      .then((res) => {
        console.log(res);
        this.setState({
          carouselList: res.data.data
        })

      })
      .finally(() => {
      })

  }

componentDidMount() {
  //轮播图
  this.getCarouselList()
}
  render() {
    const {docInfo,carouselList} = this.state
    return (
      <div className={styles.bigBox}>
        <div className={styles.topTitle}>核桃仁</div>
        {/* =========================banner轮播图======================== */}
        {carouselList.length > 0 && <Carousel
          autoplay
          infinite
          className={styles.banner}
        >
          {
            carouselList.map((val, index) => (
              <a
                key={index}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: "40vw" }}
              >
                <img
                  src={val.imgurl}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))
          }
        </Carousel>
        }
        <div className={styles.quick}>
          <Button href='/doc/discuss' className={styles.bottom} icon={<i className={['iconfont icon-jiankangguanli']} />}>病历探讨</Button>
          <Button href='/doc/activities' className={styles.bottom} icon={<i className={['iconfont icon-liwu']} />}>诊疗活动</Button>
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
