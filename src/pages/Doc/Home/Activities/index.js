import React, { Component } from 'react';
import { NavBar, Icon, Button, Badge, Modal, Toast } from 'antd-mobile';
import styles from './style.module.scss'


const alert = Modal.alert;

export default class index extends React.Component {
  state = {
    data: [
      {
        id: 1,
        datatime: "12-13  10:00:00",
        week: "星期三",
        count: 3,
        address: "北京市东城区和平街门诊",
        patientList: [
          {
            headerUrl: require("assets/images/3.png"),
            name: "唐马儒",
            datetime: "2017-12-13 14:00:00",
            state: 1,
            stateName: "已就诊",
            count: 3,
            uId: 1
          },
          {
            headerUrl: require("assets/images/3.png"),
            name: "王玛尼",
            datetime: "2017-12-13 14:00:00",
            state: 1,
            stateName: "已就诊",
            count: 0,
            uId: 2
          }
          ,
          {
            headerUrl: require("assets/images/3.png"),
            name: "李晓琪",
            datetime: "2017-12-13 14:00:00",
            state: 0,
            stateName: "未就诊",
            count: 0,
            uId: 3
          }
        ]
      },
      {
        id: 2,
        datatime: "12-13  14:00:00",
        week: "星期四",
        count: 3,
        address: "北京市东城区和平街门诊",
        patientList: [
          {
            headerUrl: require("assets/images/3.png"),
            name: "王欢欢",
            datetime: "2017-12-13 14:00:00",
            state: 1,
            stateName: "已就诊",
            count: 3,
            uId: 1
          },
          {
            headerUrl: require("assets/images/3.png"),
            name: "郝莹心",
            datetime: "2017-12-13 14:00:00",
            state: 1,
            stateName: "已就诊",
            count: 0,
            uId: 2
          }

        ]
      }

    ]
  }
  delete = ((id) => {
    const { data } = this.state;
    let nowdata = data.filter((item, index) => {
      if (item.id == id) {
        data.splice(index, 1)
      }
    })

    this.setState({
      data
    })

    Toast.info("删除成功")
  })
  render () {
    const { data } = this.state;
    return (
      <div className={styles.activities}>
        <NavBar key="1" className={styles.nav}
          mode="light"
          icon={<Icon type="left"
            onClick={
              () => {
                this.props.history.push("/doc/home/index");
              }
            } />}
          rightContent={[
            <Button key={1} size={"small"} style={{ width: 60 }}
              onClick={
                () => {
                  this.props.history.push("/doc/activities/add")
                }
              }
            >添加</Button>
          ]}
        >诊疗活动</NavBar>
        {
          data.length > 0 &&
          data.map(item => {
            return (
              <div key={item.id}>
                <div className={styles.header}>
                  <div >
                    <p>{item.datatime}
                      <span>{item.week}</span>
                      <span>患者数量{item.count}人</span>
                    </p>
                    <p>
                      诊疗地点：{item.address}
                    </p>
                  </div>
                  <div>
                    <Button className={styles.delete}
                      onClick={() =>
                        alert('删除', '您确认要删除么?', [
                          { text: '取消' },
                          { text: '确定', onPress: () => this.delete(item.id) },
                        ])
                      }
                    >删除</Button>
                  </div>
                </div>

                {
                  item.patientList.length > 0 && item.patientList.map((pitem, index) => {
                    return (
                      <a key={index} onClick={
                        () => {
                          this.props.history.push("/doc/activities/detail")
                        }

                      }>
                        <div className={styles.content} >
                          <div className={styles["content-left"]}>
                            <div>
                              <img src={pitem.headerUrl} />
                            </div>
                            <div>
                              <p>
                                <span>{pitem.name}</span>
                                <span
                                  className={pitem.state == 1 ? styles.green : styles.red}
                                >
                                  {pitem.stateName}</span><Badge text={pitem.count} className={styles.badge} />
                              </p>
                              <p>{pitem.datetime}</p>
                            </div>
                          </div>
                          <div className={styles["right"]}>
                            <Icon type="right" ></Icon>
                          </div>
                        </div>
                      </a>

                    )
                  })
                }
              </div>

            )
          })

        }




      </div>
    )
  }
}


