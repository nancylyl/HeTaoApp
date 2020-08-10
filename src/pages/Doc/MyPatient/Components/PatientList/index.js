import React, { PureComponent } from 'react'
import styles from './style.module.scss'
import Api from 'api/index'
import { Card, Icon } from 'antd-mobile';
import Axios from 'util/axios'
export default class index extends PureComponent {

  state = {
    data: [],
    loaded: false,
    flag: this.props.flag
  }
  componentDidMount () {
    console.log(this.props);
    this.init()
  }

  init () {
    Axios({
      url: Api.docmypatient.getMyPatientList,
      method: "get",
      // params: { flag: flag }
    })
      .then((res) => {
        const data = res.data;
        console.log(data);

        if (data.status = "0000") {

          this.setState({
            data: data.data.patients,
            loaded: true
          })
        }

      })
      .finally((e) => {
        // console.log(e);
      })
  }
  render () {
    const { data, loaded, flag } = this.state
    return (
      <div>

        <Card >
          <Card.Header
            thumb={<Icon
              onClick={() => {
                this.props.history.push("/doc/home/mypatient")
              }}
              className={styles.back}
              type="left"
            />}
            extra={<span className={styles.header}>{flag == 1 ? "所有患者" : "关注患者"}</span>} />
          <Card.Body>
            <ul className={styles.ul}>
              {
                loaded && data.map((item) => {
                  return (
                    <li key={item.P_ID}>
                      <a onClick={() => {
                        this.props.history.push(`/doc/home/mypatientdetail/${item.P_ID}`)
                      }}>
                        <div className={styles.content}>
                          <div className={styles.left}>
                            <div className={styles.image}>
                              <img src={require("assets/images/2.jpg")}></img>
                            </div>
                            <div>
                              <p>{item.P_Name}</p>
                              <p>
                                <span>{item.onsetAge}</span>
                                <span>{item.sex == 1 ? "男" : "女"}</span>
                                <span>{item.typeName}</span>
                              </p>
                            </div>
                          </div>
                          <div>
                            <p>{item.isMember == 1 ? "是" : "非"}会员</p>
                          [{item.relevancedate}]
                     </div>
                        </div>
                      </a>
                    </li>
                  )
                })

              }
            </ul>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
