import React, { PureComponent } from 'react';
import styles from './style.module.scss';

import Api from 'api'
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
        desc: "患者已服药"
      },
      {
        id: 2,
        dattetime: '2017-9-2 12:22:12',
        desc: "患者已服药"
      },
      {
        id: 3,
        dattetime: '2017-8-13 12:22:12',
        desc: "患者已服药"
      },
      {
        id: 4,
        dattetime: '2017-8-12 12:22:12',
        desc: "患者已服药"
      }, {
        id: 5,
        dattetime: '2017-7-12 12:22:12',
        desc: "患者已服药"
      },
      {
        id: 6,
        dattetime: '2017-6-12 12:22:12',
        desc: "患者已服药"
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
            data.length > 0 && data.map(item => {
              return (
                <li className={styles.content} key={item.id}>
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
