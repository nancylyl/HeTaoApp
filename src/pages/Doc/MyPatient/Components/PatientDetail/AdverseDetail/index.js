import React, { PureComponent } from 'react';
import styles from './style.module.scss';
import Api from 'api/index'
import Axios from 'util/axios'

//不良反应
export default class index extends PureComponent {

  state = {
    dataX: [],
    dataY: [],
    loaded: false,
    data: [
      {
        id: 1,
        dattetime: '2017-9-12 12:22:12',
        desc: "患者共有2次不良反应"
      },
      {
        id: 2,
        dattetime: '2017-9-2 12:22:12',
        desc: "患者共有21次不良反应"
      },
      {
        id: 3,
        dattetime: '2017-8-13 12:22:12',
        desc: "患者共有5次不良反应"
      },
      {
        id: 4,
        dattetime: '2017-8-12 12:22:12',
        desc: "患者发作9次"
      }, {
        id: 5,
        dattetime: '2017-7-12 12:22:12',
        desc: "患者共有22次不良反应"
      },
      {
        id: 6,
        dattetime: '2017-6-12 12:22:12',
        desc: "患者共有8次不良反应"
      }
    ]
  }
  componentDidMount () {
    // console.log(this.props);
    // this.init(1)

  }

  init (flag) {

  }
  /* 获取数据 */



  render () {

    const { data, isShowImgVisible } = this.state
    return (
      <div className={styles.onset}>

        <ul>
          {
            data.length > 0 && data.map((item, index) => {
              return (
                <li className={styles.content} key={index}>
                  <div>{item.dattetime}</div>
                  <div>{item.desc}</div>
                </li>
              )
            })
          }
        </ul>
      </div>

    )
  }
}
